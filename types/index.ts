export interface Transaction {
  id: string;
  user_id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  description: string;
  date: string;
  created_at: string;
}

export interface TransactionState {
  pending: boolean;
  transactions: {
    incomeTotal: number;
    expenseTotal: number;
    incomeCount: number;
    expenseCount: number;
    grouped: {
      byDate: Record<string, Transaction[]>;
    };
  };
  savingsTotal: number;
  investmentsTotal: number;
}

export interface SpentLimiter {
  limiterType: "overall" | "category";
  limiterValue: number;
  limiterTimePeriod: "daily" | "weekly" | "monthly" | "yearly";
}
