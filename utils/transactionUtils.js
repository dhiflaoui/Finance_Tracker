export function calculateFilteredStats(transactions) {
  let incomeCount = 0;
  let expenseCount = 0;

  if (!transactions) return { incomeCount, expenseCount };

  Object.values(transactions).forEach((transactionList) => {
    transactionList.forEach((transaction) => {
      if (transaction.type === "Income") incomeCount++;
      if (transaction.type === "Expense") expenseCount++;
    });
  });

  return { incomeCount, expenseCount };
}
export function filterTransactionsByQuery(transactions, query) {
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
}
