import { ref, computed } from "vue";
import {
  filterTransactionsByQuery,
  calculateFilteredStats,
} from "../utils/transactionUtils";
export function useTransactionFilters(byDate, searchQuery, viewSelection) {
  const collapsedGroups = ref({});

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

  const filteredTransactions = computed(() => {
    const transactions =
      viewSelection.value === "Yearly" ? byMonth.value : byDate.value;
    if (!searchQuery.value || !transactions) return transactions;

    const query = searchQuery.value.toLowerCase().trim();
    return filterTransactionsByQuery(transactions, query);
  });

  const filteredStats = computed(() => {
    return calculateFilteredStats(filteredTransactions.value);
  });

  const toggleTransactions = (date) => {
    collapsedGroups.value[date] = !collapsedGroups.value[date];
  };

  return {
    filteredTransactions,
    filteredStats,
    byMonth,
    collapsedGroups,
    toggleTransactions,
  };
}
