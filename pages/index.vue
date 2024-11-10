<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-xl font-extrabold">Summary</h1>
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
  <section class="flex justify-end gap-2 mb-4">
    <UFormGroup v-if="isSearchOpen" name="search" class="w-full md:w-96">
      <UInput
        v-model="searchQuery"
        type="text"
        placeholder="Search transactions..."
        icon="i-heroicons-magnifying-glass"
        @keyup.enter="handleSearch"
        clearable
      />
    </UFormGroup>

    <UButton
      :icon="
        isSearchOpen ? 'i-heroicons-x-mark' : 'i-heroicons-magnifying-glass'
      "
      color="white"
      variant="solid"
      :label="isSearchOpen ? 'Close' : 'Search'"
      @click="isSearchOpen = !isSearchOpen"
    />
  </section>
  <section v-if="!pending">
    <div v-for="(transactionsOnDay, date) in byDate" :key="date" class="mb-10">
      <DailyTransactionSummary :date="date" :transactions="transactionsOnDay" />
      <Transaction
        v-for="transaction in transactionsOnDay"
        :key="transaction.id"
        :transaction="transaction"
        @deleteTransaction="refresh()"
        @editTransaction="refresh()"
      />
    </div>
    <!-- TODO :  add a stickey header for the daily summary-->
    <!--  <div class="sticky top-0 bg-white dark:bg-gray-900 z-10">
        <DailyTransactionSummary
          :date="date"
          :transactions="transactionsOnDay"
        />
      </div> -->
  </section>
  <section v-else>
    <USkeleton class="h-10 w-full mb-2" v-for="i in 4" :key="i" />
  </section>
</template>
<script setup>
import { useSelectedTimePeriod } from "~/composables/useSelectedTimePeriod";
import { transactionViewOptions } from "~/constants";
const isOpen = ref(false);
const isSearchOpen = ref(false);
let searchQuery = ref("");
const user = useSupabaseUser();
const viewSelection = ref(
  user.value.user_metadata?.transaction_view ?? transactionViewOptions[1]
);
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
const {
  refresh: refreshPrevious,
  transactions: {
    incomeTotal: prevIncomeTotal,
    expenseTotal: prevExpenseTotal,
  },
} = useFetchTransactions(previous);
await Promise.all([refresh(), refreshPrevious()]);
const handleSearch = () => {
  transactionsOnDay.value.filter((transaction) => {
    return transaction.description.includes(searchQuery.value);
  });
};
</script>
