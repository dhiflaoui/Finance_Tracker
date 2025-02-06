<template>
  <div
    class="grid grid-cols-3 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100"
  >
    <div
      class="flex space-x-2 items-center justify-between space-x-4 col-span-2"
    >
      <div class="flex items-center space-x-1">
        <UIcon
          :name="
            transaction.type === 'Income'
              ? 'i-heroicons-arrow-up'
              : transaction.type === 'Expense'
              ? 'i-heroicons-arrow-down'
              : transaction.type === 'Saving'
              ? 'i-heroicons-banknotes'
              : transaction.type === 'Investment'
              ? 'i-heroicons-chart-pie'
              : 'i-heroicons-question-mark-circle'
          "
          :class="[
            transaction.type === 'Income'
              ? 'text-green-500'
              : transaction.type === 'Expense'
              ? 'text-red-500'
              : transaction.type === 'Saving'
              ? 'text-blue-500'
              : transaction.type === 'Investment'
              ? 'text-purple-500'
              : 'text-gray-500',
          ]"
          :title="transaction.type"
        />
        <div>{{ transaction.description }}</div>
      </div>
      <div v-if="viewSelection === 'Yearly'">
        <UBadge color="white">{{ dayDate }} </UBadge>
      </div>
      <div v-if="transaction.category">
        <UBadge color="white">{{ transaction.category }} </UBadge>
      </div>
    </div>

    <div class="flex items-center justify-end space-x-2">
      <div>{{ currency }}</div>
      <div>
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton
            color="white"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal"
            :loading="isLoading"
          />
          <TransactionModal
            v-model="isOpen"
            :transaction="transaction"
            @save="emit(editTransaction)"
            @delete="deleteTransaction"
          />
        </UDropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import TransactionModal from "./transaction-modal.vue";
const props = defineProps({
  transaction: {
    type: Object,
    default: {},
  },
  viewSelection: {
    type: String,
    default: "Daily",
  },
});
const dayDate = computed(() => {
  return new Date(props.transaction.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
});
const emit = defineEmits(["deleteTransaction", "editTransaction"]);
const { currency } = useCurrency(props.transaction.amount);
let isLoading = ref(false);
const { toastSuccess, toastError } = useAppToast();
const supabase = useSupabaseClient();
const isOpen = ref(false);
const deleteTransaction = async () => {
  isLoading.value = true;
  try {
    await supabase.from("transactions").delete().eq("id", props.transaction.id);
    isLoading.value = false;
    toastSuccess({
      title: "Transaction deleted",
      description: "Your transaction has been deleted",
    });
    emit("deleteTransaction", props.transaction.id);
  } catch (error) {
    toastError({
      title: "Transaction deleted",
      description: "error when trying to delete transaction  ",
    });
    console.log("error deleting transactions: ", error);
  } finally {
    isLoading.value = false;
  }
};
const items = [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square",
      color: "white",
      variant: "ghost",
      click: () => (isOpen.value = true),
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash",
      color: "white",
      variant: "ghost",
      click: deleteTransaction,
    },
  ],
];
const isIncome = computed(() => {
  return props.transaction.type === "Income";
});
const icon = computed(() => {
  return isIncome.value
    ? "i-heroicons-arrow-up-right"
    : "i-heroicons-arrow-down-left";
});
const iconColor = computed(() => {
  return isIncome.value ? "text-green-600" : "text-red-600";
});
</script>
