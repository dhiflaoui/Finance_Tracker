<template>
  <UForm :state="state" :schema="schema" @submit.prevent="saveSettings">
    <UFormGroup
      label="Transaction View"
      class="mb-4"
      help="Choose how you would like to view transactions"
    >
      <USelect
        v-model="state.transactionView"
        :options="transactionViewOptions"
      />
    </UFormGroup>
    <UFormGroup
      label="Currency"
      class="mb-4"
      help="Choose the currency you would like to use"
    >
      <USelect v-model="state.currency" :options="currencyOptions" />
    </UFormGroup>

    <CategoryInput
      v-model:categories="state.categories"
      :initial-categories="categoryList"
    />
    <UButton
      class="mt-4"
      type="submit"
      color="black"
      variant="solid"
      label="Save"
      :loading="pending"
      :disabled="pending"
    />
  </UForm>
</template>

<script setup>
import { z } from "zod";
import {
  transactionViewOptions,
  currencyOptions,
  categories,
} from "~/constants";
import { computed } from "vue";

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { toastSuccess, toastError } = useAppToast();
const pending = ref(false);

const categoryList = computed(() => {
  return user.value?.user_metadata?.categories ?? [...categories];
});

const state = ref({
  transactionView:
    user.value?.user_metadata?.transaction_view ?? transactionViewOptions[1],
  currency: user.value?.user_metadata?.currency ?? "USD",
  categories: user.value?.user_metadata?.categories ?? [...categories],
});

const schema = z.object({
  transactionView: z.enum(transactionViewOptions),
  currency: z.string(),
  categories: z.array(z.string()),
});

const saveSettings = async () => {
  pending.value = true;
  try {
    const { error } = await supabase.auth.updateUser({
      data: {
        transaction_view: state.value.transactionView,
        currency: state.value.currency,
        categories: state.value.categories,
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
</script>
