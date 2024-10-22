<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header> Add Transaction </template>
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
          ></USelectMenu>
        </UFormGroup>
        <UFormGroup label="Amount" :required="true" name="amount" class="mb-4">
          <UInput type="number" placeholder="Amount" v-model="state.amount" />
        </UFormGroup>
        <UFormGroup
          label="Transaction date"
          :required="true"
          name="created_at"
          class="mb-4"
        >
          <UInput
            type="date"
            icon="i-heroicons-calendar-days-20-solid"
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
        >
          <USelectMenu
            :options="categories"
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
import { categories, types } from "~/constants";
import { z } from "zod";
const supabase = useSupabaseClient();
const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue", "saved"]);
//Zod validation schema
const defaultSchema = z.object({
  created_at: z.string(),
  description: z.string().optional(),
  amount: z.number().positive("Amount needs to be more than 0"),
});
const incomeSchema = z.object({
  type: z.literal("Income"),
});
const expenseSchema = z.object({
  type: z.literal("Expense"),
  category: z.enum(categories),
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
const initialState = {
  type: undefined,
  amount: 0,
  created_at: undefined,
  description: undefined,
  category: undefined,
};
const state = ref({
  ...initialState,
});
const resetForm = () => {
  Object.assign(state.value, initialState);
};
const form = ref();
const isLoading = ref(false);
const toast = useToast();
const save = async () => {
  if (form.value.errors.length) return;
  try {
    const { data, error } = await supabase
      .from("transactions")
      .upsert({ ...state.value });
    isOpen.value = false;
    emit("saved");
    if (!error) {
      toast.add({
        title: "Transaction saved",
        description: "Transaction saved successfully",
        icon: "i-heroicons-check-circle",
        color: "green",
        iconColor: "green",
      });
      return;
    }
    throw error;
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Error while saving transaction",
      icon: "i-heroicons-exclamation-circle",
      color: "red",
      iconColor: "red",
    });
    console.log("error while saving transaction: ", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
