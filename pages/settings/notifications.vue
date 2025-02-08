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
            />
            <URadio
              v-model="limitType"
              value="category"
              label="Category Spending Limits"
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
            <span v-if="overallLimitError" class="text-red-500">{{
              overallLimitError
            }}</span>
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
                  :disabled="pending"
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
            <span v-if="categoryLimitError" class="text-red-500">{{
              categoryLimitError
            }}</span>
          </UFormGroup>
        </template>

        <UFormGroup label="Limit Time Period" class="mb-4">
          <USelect
            v-model="limitTimePeriod"
            :options="timePeriodOptions"
            :disabled="pending"
          />
        </UFormGroup>

        <UFormGroup label="Notification Settings" class="mb-4">
          <div class="space-y-2">
            <UCheckbox
              v-model="notifications.email"
              label="Email notifications"
              :disabled="pending"
            />
            <UCheckbox
              v-model="notifications.push"
              label="Push notifications"
              :disabled="pending"
            />
            <div class="mt-2">
              <label class="text-sm text-gray-600">Warning Threshold</label>
              <div class="flex items-center gap-2">
                <UInput
                  type="number"
                  v-model="notifications.threshold"
                  placeholder="Warning threshold %"
                  class="w-32"
                  :disabled="pending"
                  min="1"
                  max="100"
                />
                <span class="text-sm text-gray-600">% of limit</span>
              </div>
            </div>
          </div>
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

<script setup>
import { ref, computed, watch } from "vue";
import { z } from "zod";
import { useFetchTransactions } from "~/composables/useFetchTransactions";
import { useCategoryList } from "~/composables/useCategoryList";

const { categoryList } = useCategoryList();
const {
  setOverallLimit,
  setCategoryLimit,
  setLimitTimePeriod,
  setNotificationSettings,
} = useFetchTransactions();

const limitType = ref("overall"); // New ref for tracking limit type
const overallLimit = ref(0);
const categoryLimits = ref([{ category: "", amount: 0 }]);
const limitTimePeriod = ref("monthly");
const pending = ref(false);
const notifications = ref({
  email: true,
  push: false,
  threshold: 80,
});

const overallLimitError = ref("");
const categoryLimitError = ref("");

const timePeriodOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

// Reset values when changing limit type
watch(limitType, (newType) => {
  if (newType === "overall") {
    categoryLimits.value = [{ category: "", amount: 0 }];
    categoryLimitError.value = "";
  } else {
    overallLimit.value = 0;
    overallLimitError.value = "";
  }
});

const schema = computed(() => {
  if (limitType.value === "overall") {
    return z.object({
      overallLimit: z
        .number()
        .positive("Overall spending limit must be a positive number."),
      notifications: z.object({
        threshold: z.number().min(1).max(100),
      }),
    });
  } else {
    return z.object({
      categoryLimits: z.array(
        z.object({
          category: z.string().min(1, "Category is required"),
          amount: z.number().min(0, "Amount must be non-negative"),
        })
      ),
      notifications: z.object({
        threshold: z.number().min(1).max(100),
      }),
    });
  }
});

const hasErrors = computed(() => {
  return overallLimitError.value || categoryLimitError.value;
});

const addCategoryLimit = () => {
  categoryLimits.value.push({ category: "", amount: 0 });
};

const removeCategoryLimit = (index) => {
  categoryLimits.value.splice(index, 1);
};

const validateSettings = () => {
  overallLimitError.value = "";
  categoryLimitError.value = "";

  try {
    const validationData =
      limitType.value === "overall"
        ? {
            overallLimit: Number(overallLimit.value),
            notifications: {
              threshold: Number(notifications.value.threshold),
            },
          }
        : {
            categoryLimits: categoryLimits.value.map((limit) => ({
              category: limit.category,
              amount: Number(limit.amount),
            })),
            notifications: {
              threshold: Number(notifications.value.threshold),
            },
          };

    schema.value.parse(validationData);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        if (err.path[0] === "overallLimit") {
          overallLimitError.value = err.message;
        } else if (err.path[0] === "categoryLimits") {
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
    if (limitType.value === "overall") {
      await setOverallLimit({
        amount: overallLimit.value,
      });
    } else {
      await Promise.all(
        categoryLimits.value.map((limit) =>
          setCategoryLimit({
            category: limit.category,
            amount: limit.amount,
          })
        )
      );
    }

    await setLimitTimePeriod(limitTimePeriod.value);
    await setNotificationSettings(notifications.value);

    alert("Settings saved successfully!");
  } catch (error) {
    console.error("Error saving settings:", error);
    alert("Failed to save settings. Please try again.");
  } finally {
    pending.value = false;
  }
};
</script>
