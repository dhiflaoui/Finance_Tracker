<template>
  <section class="flex items-center justify-between mb-10">
    <h1>Summary</h1>
    <div>
      <USelectMenu
        :options="transactionViewOptions"
        v-model="viewSelection"
      ></USelectMenu>
    </div>
  </section>
  <section
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10"
  >
    <Trend
      color="green"
      title="Total Income"
      :amount="incomeTotal"
      lastAmount="100"
      :loading="isLoading"
    />
    <Trend
      color="red"
      title="Expenses"
      :amount="expenseCount"
      lastAmount="100"
      :loading="isLoading"
    />
    <Trend
      color="green"
      title="Investments"
      amount="1000"
      lastAmount="100"
      :loading="isLoading"
    />
    <Trend
      color="red"
      title="Savings"
      amount="100"
      lastAmount="400"
      :loading="isLoading"
    />
  </section>
  <section class="flex justify-between mb-10">
    <div>
      <h2 class="text-2xl font-extrabold">Transaction</h2>
      <div class="text-gray-500 dark:text-gray-400">
        You have {{ incomeCount }} incomes and {{ expenseCount }} expenses this
        period.
      </div>
    </div>
    <div>
      <TransactionModal v-model="isOpen" />
      <UButton
        icon="i-heroicons-plus-circle"
        color="white"
        variant="solid"
        label="Add"
        @click="isOpen = true"
      />
    </div>
  </section>
  <section v-if="!isLoading">
    <div
      v-for="(transactionsOnDay, date) in transactGroupedByDate"
      :key="date"
      class="mb-10"
    >
      <DailyTransactionSummary :date="date" :transactions="transactionsOnDay" />
      <Transaction
        v-for="transaction in transactionsOnDay"
        :key="transaction.id"
        :transaction="transaction"
        @deleteTransaction="refreshTransactions()"
      />
    </div>
  </section>
  <section v-else>
    <USkeleton class="h-10 w-full mb-2" v-for="i in 4" :key="i" />
  </section>
</template>
<script setup>
import Trend from "./components/trend.vue";
import Transaction from "./components/transaction.vue";
import { ref } from "vue";
import { transactionViewOptions } from "~/constants";
const viewSelection = ref(transactionViewOptions[1]);
const supabase = useSupabaseClient();
const transactions = ref([]);
const isLoading = ref(false);
const isOpen = ref(false);
const income = computed(() => {
  return transactions.value.filter(
    (transaction) => transaction.type === "Income"
  );
});
const expense = computed(() => {
  return transactions.value.filter(
    (transaction) => transaction.type === "Expense"
  );
});
const incomeCount = computed(() => {
  return income.value.length;
});
const expenseCount = computed(() => {
  return expense.value.length;
});
const incomeTotal = computed(() => {
  return income.value.reduce((sum, transaction) => {
    return sum + transaction.amount;
  }, 0);
});
const fetchTransactions = async () => {
  isLoading.value = true;
  try {
    const { data } = await useAsyncData("transactions", async () => {
      const { data, error } = await supabase.from("transactions").select();
      if (error) return [];

      return data;
    });
    return data.value;
  } catch (error) {
    console.log("error while fetching transactions: ", error);
  } finally {
    isLoading.value = false;
  }
};
const refreshTransactions = async () =>
  (transactions.value = await fetchTransactions());
await refreshTransactions();

const transactGroupedByDate = computed(() => {
  let grouped = {};
  for (let transaction of transactions.value) {
    const date = new Date(transaction.created_at).toISOString().split("T")[0];
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(transaction);
  }
  return grouped;
});
</script>
