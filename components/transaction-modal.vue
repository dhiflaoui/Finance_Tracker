<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <div class="modal-header">
          <span>{{ isEditing ? "Edit Transaction" : "Add Transaction" }}</span>
          <UButton
            icon="i-heroicons-x-mark-20-solid"
            @click="isOpen = false"
            class="close-button"
            color="gray"
            variant="ghost"
            :ui="{
              padding: 'p-1',
              rounded: 'rounded-full',
              color: {
                gray: {
                  ghost: 'hover:bg-gray-100 text-gray-500 hover:text-gray-700',
                },
              },
            }"
          />
        </div>
      </template>
      <UForm :state="state" ref="form" @submit.prevent="save" :schema="schema">
        <UFormGroup
          label="Transaction type"
          :required="true"
          name="type"
          class="mb-4"
        >
          <USelectMenu
            v-model="state.type"
            :options="types"
            placeholder="Select the transaction type"
            :disabled="isEditing"
          ></USelectMenu>
        </UFormGroup>
        <UFormGroup label="Amount" :required="true" name="amount" class="mb-4">
          <UInput
            type="number"
            placeholder="Amount"
            v-model.number="state.amount"
          />
        </UFormGroup>
        <UFormGroup label="Transaction date" name="created_at" class="mb-4">
          <UInput
            type="date"
            :icon="'i-heroicons-calendar-days-20-solid'"
            v-model="state.created_at"
          />
        </UFormGroup>
        <UFormGroup
          label="Description"
          hint="Optional"
          name="desc"
          class="mb-4"
        >
          <UInput placeholder="Description" v-model="state.description" />
        </UFormGroup>
        <UFormGroup
          label="Category"
          :required="true"
          name="category"
          class="mb-4"
          v-if="state.type === 'Expense'"
        >
          <USelectMenu
            :options="categoryList"
            placeholder="Select a category"
            v-model="state.category"
          ></USelectMenu>
        </UFormGroup>
        <UButton
          type="submit"
          color="black"
          label="Save"
          variant="solid"
          :loading="isLoading"
        />
      </UForm>
    </UCard>
  </UModal>
</template>

<script setup>
import { types } from "~/constants";
import { z } from "zod";
import { computed } from "vue";
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const props = defineProps({
  modelValue: Boolean,
  transaction: {
    type: Object,
    required: false,
  },
});
const { categoryList } = useCategoryList();

const isEditing = computed(() => !!props.transaction);
const emit = defineEmits(["update:modelValue", "saved"]);
//Zod validation schema
const defaultSchema = z.object({
  created_at: z.string().optional(),
  description: z.string().optional(),
  amount: z.number().positive("Amount needs to be more than 0"),
});
const incomeSchema = z.object({
  type: z.literal("Income"),
});
const expenseSchema = z.object({
  type: z.literal("Expense"),
  category: z.enum(categoryList.value),
});
const investmentSchema = z.object({
  type: z.literal("Investment"),
});
const saveSchema = z.object({
  type: z.literal("Saving"),
});
const schema = z.intersection(
  z.discriminatedUnion("type", [
    incomeSchema,
    expenseSchema,
    saveSchema,
    investmentSchema,
  ]),
  defaultSchema
);
const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (!value) resetForm();
    emit("update:modelValue", value);
  },
});
const initialState = isEditing.value
  ? {
      type: props.transaction.type,
      amount: props.transaction.amount,
      created_at: props.transaction.created_at.split("T")[0],
      description: props.transaction.description,
      category: props.transaction.category,
    }
  : {
      type: undefined,
      amount: 0,
      created_at: new Date().toISOString().substr(0, 10),
      description: undefined,
      category: "other",
    };
const state = ref({ ...initialState });
const resetForm = () => {
  Object.assign(state.value, initialState);
};
const form = ref();
const isLoading = ref(false);
const { toastSuccess, toastError } = useAppToast();
const save = async () => {
  const isValid = await form.value.validate();
  if (!isValid) {
    toastSuccess({
      title: "Validation Error",
      description: "Please fix the errors in the form.",
    });
    return;
  }
  isLoading.value = true;
  try {
    const { data: result, error } = await supabase
      .from("transactions")
      .upsert({ ...state.value, id: props.transaction?.id });
    if (error) {
      toastError({
        title: "Transaction not saved",
        description: `Error while saving transaction `,
      });
      console.error("error while saving transaction: ", error);
    }
    console.log("result after save in supabase: ", result);
    /*  throw error; */
    isOpen.value = false;
    emit("saved");
    toastSuccess({
      title: "Transaction saved",
      description: "Transaction saved successfully",
    });
  } catch (error) {
    toastError({
      title: "Transaction not saved",
      description: `Error while saving transaction`,
    });
    console.error("error while saving transaction: ", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
<style scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.modal-title {
  font-weight: 500;
  font-size: 1.125rem;
  color: #1f2937;
}

.close-button {
  transition: all 0.2s ease;
}

.close-button:hover {
  transform: scale(1.05);
}
</style>
