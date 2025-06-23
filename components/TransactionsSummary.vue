<script setup lang="ts">
interface TransactionsSummaryProps {
  incomeTotal: number;
  prevIncomeTotal: number;
  expenseTotal: number;
  prevExpenseTotal: number;
  investmentsTotal: number;
  savingsTotal: number;
  pending: boolean;
}

defineProps<TransactionsSummaryProps>();
</script>

<template>
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
</template>
