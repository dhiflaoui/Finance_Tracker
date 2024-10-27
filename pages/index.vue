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
      :lastAmount="prevIncomeTotal"
      :loading="pending"
    />
    <Trend
      color="red"
      title="Expenses"
      :amount="expenseTotal"
      :lastAmount="prevExpenseTotal"
      :loading="pending"
    />
    <Trend
      color="green"
      title="Investments"
      amount="1000"
      lastAmount="100"
      :loading="pending"
    />
    <Trend
      color="red"
      title="Savings"
      amount="100"
      lastAmount="400"
      :loading="pending"
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
      <TransactionModal v-model="isOpen" @saved="refresh()" />
      <UButton
        icon="i-heroicons-plus-circle"
        color="white"
        variant="solid"
        label="Add"
        @click="isOpen = true"
      />
    </div>
  </section>
  <section v-if="!pending">
    <div v-for="(transactionsOnDay, date) in byDate" :key="date" class="mb-10">
      <DailyTransactionSummary :date="date" :transactions="transactionsOnDay" />
      <Transaction
        v-for="transaction in transactionsOnDay"
        :key="transaction.id"
        :transaction="transaction"
        @deleteTransaction="refresh()"
      />
    </div>
  </section>
  <section v-else>
    <USkeleton class="h-10 w-full mb-2" v-for="i in 4" :key="i" />
  </section>
</template>
<script setup>
import { useSelectedTimePeriod } from "~/composables/useSelectedTimePeriod";
import { transactionViewOptions } from "~/constants";
const isOpen = ref(false);
const user = useSupabaseUser();
const viewSelection = ref(
  user.value.user_metadata?.transaction_view ?? transactionViewOptions[1]
);
console.log("viewSelection: ", viewSelection.value);
const { current, previous } = useSelectedTimePeriod(viewSelection);
const {
  pending,
  refresh,
  transactions: {
    incomeTotal,
    expenseTotal,
    incomeCount,
    expenseCount,
    grouped: { byDate },
  },
} = useFetchTransactions(current);
console.log("byDate: ", byDate.value);
const {
  refresh: refreshPrevious,
  transactions: {
    incomeTotal: prevIncomeTotal,
    expenseTotal: prevExpenseTotal,
  },
} = useFetchTransactions(previous);
await Promise.all([refresh(), refreshPrevious()]);
</script>
