<script setup>
import { useSelectedTimePeriod } from "~/composables/useSelectedTimePeriod";
import { transactionViewOptions } from "~/constants";
const isOpen = ref(false);
const isSearchOpen = ref(false);
const searchQuery = ref("");
const collapsedGroups = ref({});

const user = useSupabaseUser();
const viewSelection = ref(
  user.value.user_metadata?.transaction_view ?? transactionViewOptions[1]
);

// Time Period Management
const { current, previous } = useSelectedTimePeriod(viewSelection);

// Fetch Transactions
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
  savingsTotal,
  investmentsTotal,
} = useFetchTransactions(current, user.value.id);

const {
  refresh: refreshPrevious,
  transactions: {
    incomeTotal: prevIncomeTotal,
    expenseTotal: prevExpenseTotal,
  },
} = useFetchTransactions(previous, user.value.id);

// Initial Data Load
await Promise.all([refresh(), refreshPrevious()]);

// Search Functionality
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (!isSearchOpen.value) {
    clearSearch();
  }
};

const closeSearch = () => {
  isSearchOpen.value = false;
  clearSearch();
};

const clearSearch = () => {
  searchQuery.value = "";
};

// Filtered Transactions
const filteredTransactions = computed(() => {
  const transactions =
    viewSelection.value === "Yearly" ? byMonth.value : byDate.value;
  if (!searchQuery.value || !transactions) return transactions;

  const query = searchQuery.value.toLowerCase().trim();
  const filtered = {};

  Object.entries(transactions).forEach(([date, transactionList]) => {
    const matchingTransactions = transactionList.filter(
      (transaction) =>
        transaction.description?.toLowerCase().includes(query) ||
        transaction.category?.toLowerCase().includes(query) ||
        transaction.amount?.toString().includes(query)
    );

    if (matchingTransactions.length > 0) {
      filtered[date] = matchingTransactions;
    }
  });

  return filtered;
});

// Filtered Statistics
const filteredStats = computed(() => {
  let incomeCount = 0;
  let expenseCount = 0;

  if (!filteredTransactions.value) return { incomeCount, expenseCount };

  Object.values(filteredTransactions.value).forEach((transactions) => {
    transactions.forEach((transaction) => {
      if (transaction.type === "Income") incomeCount++;
      if (transaction.type === "Expense") expenseCount++;
    });
  });

  return { incomeCount, expenseCount };
});

// Group Management
const toggleTransactions = (date) => {
  collapsedGroups.value[date] = !collapsedGroups.value[date];
};

// Monthly Grouping
const byMonth = computed(() => {
  if (!byDate.value) return {};

  return Object.entries(byDate.value).reduce((acc, [date, transactions]) => {
    const monthKey = date.substring(0, 7);
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(...transactions);
    return acc;
  }, {});
});

// Clear search when view changes
watch(viewSelection, () => {
  clearSearch();
});

const { spentLimiterOverallAlert, spentLimiterAlertMessage } = useSpentLimiter(
  viewSelection,
  expenseTotal,
  user.value.user_metadata?.spent_limiter
);
</script>
<template>
  <div class="flex flex-col h-screen">
    <!-- Previous header sections remain unchanged -->
    <section class="flex items-center justify-between mb-10">
      <h1 class="text-xl font-extrabold">Summary</h1>
      <div>
        <USelectMenu
          :options="transactionViewOptions"
          v-model="viewSelection"
        ></USelectMenu>
      </div>
    </section>

    <!-- Summary Cards -->
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
        :amount="investmentsTotal"
        :lastAmount="0"
        :loading="pending"
      />
      <Trend
        color="green"
        title="Savings"
        :amount="savingsTotal"
        :lastAmount="0"
        :loading="pending"
      />
    </section>
    <!-- New Chart Section -->
    <section class="mb-10" v-if="!pending">
      <TransactionsCharts
        :TransactionPerDate="viewSelection === 'Yearly' ? byMonth : byDate"
      />
    </section>
    <!-- spent limiter alert Section -->
    <section
      v-if="!pending && spentLimiterOverallAlert"
      style="padding-bottom: 20px"
    >
      <UAlert
        icon="i-heroicons-exclamation-circle"
        :close-button="{
          icon: 'i-heroicons-x-mark-20-solid',
          color: 'gray',
          variant: 'link',
          padded: false,
        }"
        variant="outline"
        color="red"
        :title="`Spent Limiter Alert!`"
        :description="spentLimiterAlertMessage"
      />
    </section>
    <!-- Transaction Header with Search -->
    <section class="flex justify-between mb-10">
      <div>
        <h2 class="text-2xl font-extrabold">Transaction</h2>
        <div class="text-gray-500 dark:text-gray-400">
          You have {{ filteredStats.incomeCount }} incomes and
          {{ filteredStats.expenseCount }} expenses this period.
        </div>
      </div>

      <div class="flex items-center gap-4">
        <!-- Search Input with Nuxt Transition -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div v-show="isSearchOpen" class="w-60">
            <UInput
              v-model="searchQuery"
              type="text"
              placeholder="Search transactions..."
              icon="i-heroicons-magnifying-glass"
              clearable
              @keyup.escape="closeSearch"
              @clear="clearSearch"
            />
          </div>
        </transition>

        <!-- Search Toggle Button -->
        <UButton
          :icon="
            isSearchOpen ? 'i-heroicons-x-mark' : 'i-heroicons-magnifying-glass'
          "
          color="white"
          variant="solid"
          :label="isSearchOpen ? '' : 'Search'"
          @click="toggleSearch"
        />

        <!-- Add Transaction Button -->
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

    <!-- Scrollable Transactions Section -->
    <div class="flex-1 overflow-y-auto">
      <section v-if="!pending">
        <div
          v-for="(transactionsOnDay, period) in filteredTransactions"
          :key="period"
          class="mb-6"
        >
          <DailyTransactionSummary
            v-if="viewSelection !== 'Daily'"
            :date="period"
            :transactions="transactionsOnDay"
            @toggle="toggleTransactions(period)"
            :viewSelection="viewSelection"
          />
          <div
            v-show="!collapsedGroups[period]"
            class="pl-6 border-l-2 border-gray-100 dark:border-gray-800 ml-2"
          >
            <Transaction
              v-for="transaction in transactionsOnDay"
              :key="transaction.id"
              :transaction="transaction"
              @deleteTransaction="refresh()"
              @editTransaction="refresh()"
              :viewSelection="viewSelection"
            />
          </div>
        </div>
      </section>
      <section v-else>
        <USkeleton class="h-10 w-full mb-2" v-for="i in 4" :key="i" />
      </section>
    </div>
  </div>
</template>
<style scoped>
.h-screen {
  height: 100vh;
}
</style>
