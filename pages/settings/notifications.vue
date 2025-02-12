<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { z } from "zod";
import { useCategoryList } from "~/composables/useCategoryList";
import { useAppToast } from "~/composables/useAppToast";
import { useSupabaseClient, useSupabaseUser } from "#imports";

const { toastSuccess, toastError } = useAppToast();
const supabase = useSupabaseClient();
const { categoryList } = useCategoryList();
const user = useSupabaseUser();

// Form state
const limitType = ref("overall");
const overallLimit = ref(0);
const categoryLimits = ref([{ category: "", amount: 0 }]);
const limitTimePeriod = ref("monthly");
const pending = ref(false);
const notifications = ref({
  email: true,
  push: false,
  threshold: 80,
});

// Validation state
const overallLimitError = ref("");
const categoryLimitError = ref("");

const timePeriodOptions = [
  { value: "Daily", label: "Daily" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
  { value: "Yearly", label: "Yearly" },
];

// Initialize state from user metadata
const initializeState = () => {
  const userMeta = user.value?.user_metadata?.spent_limiter;
  if (userMeta) {
    limitType.value = userMeta.limiterType || "overall";
    limitTimePeriod.value = userMeta.limiterTimePeriod || "monthly";

    if (userMeta.limiterType === "overall") {
      overallLimit.value = Number(userMeta.limiterValue) || 0;
      categoryLimits.value = [{ category: "", amount: 0 }];
    } else {
      overallLimit.value = 0;
      categoryLimits.value = Array.isArray(userMeta.limiterCategories)
        ? userMeta.limiterCategories.map((cat) => ({
            category: cat.category || "",
            amount: Number(cat.amount) || 0,
          }))
        : [{ category: "", amount: 0 }];
    }
  }
};

watch(limitType, (newType) => {
  if (newType === "overall") {
    categoryLimits.value = [{ category: "", amount: 0 }];
    categoryLimitError.value = "";
  } else {
    overallLimit.value = 0;
    overallLimitError.value = "";
  }
});

// Validation schema
const schema = computed(() => {
  const baseSchema = {
    notifications: z.object({
      threshold: z.number().min(1).max(100),
    }),
  };

  if (limitType.value === "overall") {
    return z.object({
      ...baseSchema,
      overallLimit: z
        .number()
        .positive("Overall spending limit must be a positive number"),
    });
  }

  return z.object({
    ...baseSchema,
    categoryLimits: z
      .array(
        z.object({
          category: z.string().min(1, "Category is required"),
          amount: z.number().min(0, "Amount must be non-negative"),
        })
      )
      .min(1, "At least one category limit is required"),
  });
});

const hasErrors = computed(() =>
  Boolean(overallLimitError.value || categoryLimitError.value)
);

const addCategoryLimit = () => {
  if (categoryLimits.value.length < categoryList.length) {
    categoryLimits.value.push({ category: "", amount: 0 });
  }
};

const removeCategoryLimit = (index) => {
  if (categoryLimits.value.length > 1) {
    categoryLimits.value.splice(index, 1);
  }
};

const validateSettings = () => {
  overallLimitError.value = "";
  categoryLimitError.value = "";

  try {
    const validationData = {
      notifications: {
        threshold: Number(notifications.value.threshold),
      },
      ...(limitType.value === "overall"
        ? { overallLimit: Number(overallLimit.value) }
        : {
            categoryLimits: categoryLimits.value.map((limit) => ({
              category: limit.category,
              amount: Number(limit.amount),
            })),
          }),
    };

    schema.value.parse(validationData);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        const [field] = err.path;
        if (field === "overallLimit") {
          overallLimitError.value = err.message;
        } else if (field === "categoryLimits") {
          categoryLimitError.value = "Please check category limits for errors";
        }
      });
    }
    return false;
  }
};

const saveSettings = async () => {
  if (!validateSettings()) return;

  pending.value = true;
  try {
    const { error } = await supabase.auth.updateUser({
      data: {
        spent_limiter: {
          limiterValue:
            limitType.value === "overall" ? Number(overallLimit.value) : 0,
          limiterType: limitType.value,
          limiterTimePeriod: limitTimePeriod.value,
          limiterCategories:
            limitType.value === "category"
              ? categoryLimits.value.map((cat) => ({
                  category: cat.category,
                  amount: Number(cat.amount),
                }))
              : [],
        },
      },
    });

    if (error) throw error;
    toastSuccess({ title: "Settings updated" });
  } catch (error) {
    toastError({
      title: "Error updating settings",
      description: error.message,
    });
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  initializeState();
});
</script>

<template>
  <div class="p-6">
    <UCard>
      <template #header>
        <h1 class="text-3xl font-bold">Spent Limiter</h1>
      </template>

      <form @submit.prevent="saveSettings">
        <UFormGroup label="Limit Type" class="mb-4">
          <div class="flex gap-4">
            <URadio
              v-model="limitType"
              value="overall"
              label="Overall Spending Limit"
              :disabled="pending"
            />
            <URadio
              v-model="limitType"
              value="category"
              label="Category Spending Limits"
              :disabled="pending"
            />
          </div>
        </UFormGroup>

        <template v-if="limitType === 'overall'">
          <UFormGroup label="Overall Spending Limit" class="mb-4">
            <div class="flex items-center gap-2">
              <UInput
                type="number"
                v-model="overallLimit"
                placeholder="Enter overall spending limit"
                :disabled="pending"
                step="0.01"
                min="0"
              />
            </div>
            <p v-if="overallLimitError" class="text-red-500 text-sm mt-1">
              {{ overallLimitError }}
            </p>
          </UFormGroup>
        </template>

        <template v-else>
          <UFormGroup label="Category Spending Limits" class="mb-4">
            <div
              v-for="(limit, index) in categoryLimits"
              :key="index"
              class="mb-2"
            >
              <div class="flex items-center gap-2">
                <USelect
                  v-model="limit.category"
                  :options="categoryList"
                  class="flex-1"
                  :disabled="pending"
                />
                <UInput
                  type="number"
                  v-model="limit.amount"
                  placeholder="Limit amount"
                  class="w-32"
                  :disabled="pending"
                  step="0.01"
                  min="0"
                />
                <UButton
                  color="red"
                  variant="soft"
                  icon="i-heroicons-trash"
                  @click="removeCategoryLimit(index)"
                  :disabled="pending || categoryLimits.length <= 1"
                />
              </div>
            </div>
            <UButton
              size="sm"
              color="gray"
              variant="soft"
              icon="i-heroicons-plus"
              label="Add Category Limit"
              @click="addCategoryLimit"
              :disabled="
                pending || categoryLimits.length >= categoryList.length
              "
              class="mt-2"
            />
            <p v-if="categoryLimitError" class="text-red-500 text-sm mt-1">
              {{ categoryLimitError }}
            </p>
          </UFormGroup>
        </template>

        <UFormGroup label="Limit Time Period" class="mb-4">
          <USelect
            v-model="limitTimePeriod"
            :options="timePeriodOptions"
            :disabled="pending"
          />
        </UFormGroup>

        <UButton
          class="mt-4"
          type="submit"
          color="black"
          variant="solid"
          label="Save Settings"
          :loading="pending"
          :disabled="pending || hasErrors"
        />
      </form>
    </UCard>
  </div>
</template>
