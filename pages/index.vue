<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "vue";
import { useTransactionState } from "~/composables/useTransactionState";
import { useTransactionSearch } from "~/composables/useTransactionSearch";
import { useTransactionFilters } from "~/composables/useTransactionFilters";
import { useSpentLimiter } from "~/composables/useSpentLimiter";
import { useSelectedTimePeriod } from "~/composables/useSelectedTimePeriod";
import { transactionViewOptions } from "~/constants";
import type { TransactionState, SpentLimiter } from "~/types/index";

// Core state
const isOpen: Ref<boolean> = ref(false);
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const viewSelection: Ref<string> = ref(
  user.value?.user_metadata?.transaction_view ?? transactionViewOptions[1]
);

// Time period and transaction data
const { current, previous } = useSelectedTimePeriod(viewSelection);
const { state, previousState, refresh, refreshPrevious } = useTransactionState(
  current,
  previous,
  user.value?.id
);

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
} = useTransactionFilters(
  state.transactions.grouped.byDate,
  searchQuery,
  viewSelection
);

// Spent limiter
const { overallAlert, overallAlertMessage } = useSpentLimiter(
  viewSelection,
  state.transactions.expenseTotal,
  user.value?.user_metadata?.spent_limiter
);

// Initial data load
await Promise.all([refresh(), refreshPrevious()]);

// // Clear search when view changes
// watch(viewSelection, clearSearch);
// const user = ref(supabase.auth.user());

// Set up auth state change listener
supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
    // Update user if needed or trigger other actions
    user.value = session?.user || null;
  }
});
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
        :income-total="state.transactions.incomeTotal.value"
        :prev-income-total="previousState.transactions.incomeTotal"
        :expense-total="state.transactions.expenseTotal.value"
        :prev-expense-total="previousState.transactions.expenseTotal"
        :investments-total="state.investmentsTotal.value"
        :savings-total="state.savingsTotal.value"
        :pending="state.pending.value"
      />
    </section>

    <!-- Charts Section -->
    <section class="mb-10">
      <!-- v-if="!state.pending" -->
      <!-- <TransactionsCharts
        :transactions="
          viewSelection === 'Yearly'
            ? byMonth
            : state.transactions.grouped.byDate
        "
      /> -->
    </section>

    <!-- Alert Section -->
    <SpentLimitAlert
      :show="overallAlert"
      :message="overallAlertMessage"
      variant="outline"
    />

    <!-- Transaction Controls -->
    <section class="flex justify-between mb-10">
      <!-- <TransactionControls
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
      /> -->
    </section>

    <!-- Transaction List -->
    <!-- <TransactionList
      :pending="state.pending.value"
      :transactions="filteredTransactions"
      :collapsed-groups="collapsedGroups"
      :view-selection="viewSelection"
      :expense-total="state.transactions.expenseTotal.value"
      @toggle-group="toggleTransactions"
      @transaction-updated="refresh"
    /> -->
  </div>
</template>

<style scoped>
.h-screen {
  height: 100vh;
}
</style>
