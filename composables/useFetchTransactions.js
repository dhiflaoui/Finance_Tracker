export const useFetchTransactions = () => {
  const transactions = ref([]);
  const pending = ref(false);
  const supabase = useSupabaseClient();
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
  const expenseTotal = computed(() => {
    return expense.value.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);
  });
  const fetchTransactions = async () => {
    pending.value = true;
    try {
      const { data } = await useAsyncData("transactions", async () => {
        const { data, error } = await supabase
          .from("transactions")
          .select()
          .order("created_at", { ascending: false });
        if (error) return [];

        return data;
      });
      return data.value;
    } catch (error) {
      console.log("error while fetching transactions: ", error);
    } finally {
      pending.value = false;
    }
  };
  const refresh = async () => (transactions.value = await fetchTransactions());
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
  return {
    transactions: {
      all: transactions,
      grouped: {
        byDate: transactGroupedByDate,
      },
      income,
      expense,
      incomeTotal,
      expenseTotal,
      incomeCount,
      expenseCount,
    },
    pending,
    refresh,
  };
};
