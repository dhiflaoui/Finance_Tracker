<script setup>
import { ref, computed, watch } from "vue";
import { useTransactionState } from "./composables/useTransactionState";
import { useTransactionSearch } from "./composables/useTransactionSearch";
import { useTransactionFilters } from "./composables/useTransactionFilters";
import { useSpentLimiter } from "./composables/useSpentLimiter";
import { useSelectedTimePeriod } from "~/composables/useSelectedTimePeriod";
import { transactionViewOptions } from "~/constants";

// Core state
const isOpen = ref(false);
const user = useSupabaseUser();
const viewSelection = ref(
  user.value.user_metadata?.transaction_view ?? transactionViewOptions[1]
);

// Time period and transaction data
const { current, previous } = useSelectedTimePeriod(viewSelection);
const {
  state: {
    pending,
    transactions: {
      incomeTotal,
      expenseTotal,
      incomeCount,
      expenseCount,
      grouped: { byDate },
    },
    savingsTotal,
    investmentsTotal,
  },
  previousState: {
    transactions: {
      incomeTotal: prevIncomeTotal,
      expenseTotal: prevExpenseTotal,
    },
  },
  refresh,
  refreshPrevious,
} = useTransactionState(current, previous, user.value.id);

// Search functionality
const { isSearchOpen, searchQuery, toggleSearch, closeSearch, clearSearch } =
  useTransactionSearch();

// Transaction filtering and grouping
const {
  filteredTransactions,
  filteredStats,
  byMonth,
  collapsedGroups,
  toggleTransactions,
} = useTransactionFilters(byDate, searchQuery, viewSelection);

// Spent limiter
const { overallAlert, overallAlertMessage } = useSpentLimiter(
  viewSelection,
  expenseTotal,
  user.value.user_metadata?.spent_limiter
);

// Initial data load
await Promise.all([refresh(), refreshPrevious()]);

// Clear search when view changes
watch(viewSelection, clearSearch);
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- Header Section -->
    <section class="flex items-center justify-between mb-10">
      <TransactionsHeader
        :view-selection="viewSelection"
        @update:view-selection="viewSelection = $event"
      />
    </section>

    <!-- Summary Section -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10"
    >
      <TransactionsSummary
        :income-total="incomeTotal"
        :prev-income-total="prevIncomeTotal"
        :expense-total="expenseTotal"
        :prev-expense-total="prevExpenseTotal"
        :investments-total="investmentsTotal"
        :savings-total="savingsTotal"
        :pending="pending"
      />
    </section>

    <!-- Charts Section -->
    <section class="mb-10">
      <TransactionsCharts
        v-if="!pending"
        :transactions="viewSelection === 'Yearly' ? byMonth : byDate"
      />
    </section>

    <!-- Alert Section -->
    <SpentLimitAlert
      :show="overallAlert"
      :message="overallAlertMessage"
      variant="outline"
    />

    <!-- Transaction Controls -->
    <section class="flex justify-between mb-10">
      <TransactionControls
        :filtered-stats="filteredStats"
        :is-search-open="isSearchOpen"
        :search-query="searchQuery"
        :is-modal-open="isOpen"
        @toggle-search="toggleSearch"
        @close-search="closeSearch"
        @clear-search="clearSearch"
        @update:search-query="searchQuery = $event"
        @update:is-modal-open="isOpen = $event"
        @transaction-saved="refresh"
      />
    </section>

    <!-- Transaction List -->
    <TransactionList
      :pending="pending"
      :transactions="filteredTransactions"
      :collapsed-groups="collapsedGroups"
      :view-selection="viewSelection"
      :expense-total="expenseTotal"
      @toggle-group="toggleTransactions"
      @transaction-updated="refresh"
    />
  </div>
</template>

<style scoped>
.h-screen {
  height: 100vh;
}
</style>
