import { ref, computed, watch } from "vue";
import { useAsyncData } from "nuxt/app";
// import { useSupabaseClient } from '#imports';


interface Transaction {
  id: string;
  amount: number;
  type: "Income" | "Expense" | "Investment";
  created_at: string;
  user_id: string;
  [key: string]: any; 
}

interface Period {
  from: Date;
  to: Date;
}

interface TransactionsGroup {
  [date: string]: Transaction[];
}

interface TransactionsReturn {
  transactions: {
    all: Ref<Transaction[]>;
    grouped: {
      byDate: ComputedRef<TransactionsGroup>;
    };
    income: ComputedRef<Transaction[]>;
    expense: ComputedRef<Transaction[]>;
    incomeTotal: ComputedRef<number>;
    expenseTotal: ComputedRef<number>;
    incomeCount: ComputedRef<number>;
    expenseCount: ComputedRef<number>;
  };
  savingsTotal: ComputedRef<number>;
  investmentsTotal: ComputedRef<number>;
  pending: Ref<boolean>;
  refresh: () => Promise<Transaction[]>;
}

export const useFetchTransactions = (
  period: Ref<Period>,
  currentUserID: string
): TransactionsReturn => {
  const supabase = useSupabaseClient();
  const transactions = ref<Transaction[]>([]);
  const pending = ref<boolean>(false);

  const income = computed<Transaction[]>(() => {
    return transactions.value.filter(
      (transaction) => transaction.type === "Income"
    );
  });

  const expense = computed<Transaction[]>(() => {
    return transactions.value.filter(
      (transaction) => transaction.type === "Expense"
    );
  });

  const incomeCount = computed<number>(() => {
    return income.value.length;
  });

  const expenseCount = computed<number>(() => {
    return expense.value.length;
  });

  const incomeTotal = computed<number>(() => {
    return income.value.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);
  });

  const expenseTotal = computed<number>(() => {
    return expense.value.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);
  });

  const fetchTransactions = async (): Promise<Transaction[]> => {
    pending.value = true;
    try {
      const { data } = await useAsyncData<Transaction[]>(
        `transactions-${period.value.from.toDateString()}-${period.value.to.toDateString()}`,
        async () => {
          const { data, error } = await supabase
            .from("transactions")
            .select()
            .gte("created_at", period.value.from.toISOString())
            .lte("created_at", period.value.to.toISOString())
            .eq("user_id", currentUserID)
            .order("created_at", { ascending: false });

          if (error) return [];

          return data as Transaction[];
        }
      );

      return data.value || [];
    } catch (error) {
      console.log("error while fetching transactions: ", error);
      return [];
    } finally {
      pending.value = false;
    }
  };

  const refresh = async (): Promise<Transaction[]> => {
    transactions.value = await fetchTransactions();
    return transactions.value;
  };

  watch(period, async () => await refresh());

  const transactGroupedByDate = computed<TransactionsGroup>(() => {
    const grouped: TransactionsGroup = {};

    for (const transaction of transactions.value) {
      const date = transaction.created_at.split("T")[0];
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(transaction);
    }

    return grouped;
  });

  const savingsTotal = computed<number>(() => {
    return incomeTotal.value - expenseTotal.value;
  });

  const investmentsTotal = computed<number>(() => {
    return transactions.value
      .filter((transaction) => transaction.type === "Investment")
      .reduce((sum, transaction) => sum + transaction.amount, 0);
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
    savingsTotal,
    investmentsTotal,
    pending,
    refresh,
  };
};
