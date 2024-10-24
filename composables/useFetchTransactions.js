export const useFetchTransactions = (period) => {
  console.log("period: ", period);
  const supabase = useSupabaseClient();
  const transactions = ref([]);
  const pending = ref(false);

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
      const { data } = await useAsyncData(
        `transactions-${period.value.from.toDateString()}-${period.value.to.toDateString()}`,
        async () => {
          const { data, error } = await supabase
            .from("transactions")
            .select()
            .gte("created_at", period.value.from.toISOString())
            .gte("created_at", period.value.to.toISOString())
            .order("created_at", { ascending: false });
          if (error) return [];

          return data;
        }
      );
      console.log("data.value: ", data.value);
      return data.value;
    } catch (error) {
      console.log("error while fetching transactions: ", error);
    } finally {
      pending.value = false;
    }
  };
  const refresh = async () => (transactions.value = await fetchTransactions());
  watch(period, async () => await refresh());
  console.log("transactions.value : ", transactions.value);
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
  console.log("transactGroupedByDate: ", transactGroupedByDate.value);

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
