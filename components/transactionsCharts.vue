<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Income vs Expenses Chart -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-4">Income vs Expenses</h3>
      <div class="h-40">
        <LineChart
          :chart-data="transactionChartData"
          :options="chartOptions"
          size="large"
        />
      </div>
    </div>

    <!-- Category Distribution Chart -->
    <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-4">Category Distribution</h3>
      <div class="h-40">
        <DoughnutChart
          :chart-data="categoryChartData"
          :options="doughnutOptions"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const { TransactionPerDate } = defineProps({
  TransactionPerDate: {
    type: Object,
    required: true,
  },
});
// Chart data computation
const transactionChartData = computed(() => {
  const dates = Object.keys(TransactionPerDate);
  const incomeData = [];
  const expenseData = [];
  const listTransactionsData = Object.values(TransactionPerDate);

  listTransactionsData.forEach((transactionData) => {
    const dayIncome = transactionData.reduce((sum, t) => {
      return t.type === "Income" ? sum + t.amount : sum;
    }, 0);

    const dayExpense = transactionData.reduce((sum, t) => {
      return t.type === "Expense" ? sum + t.amount : sum;
    }, 0);

    incomeData.push(dayIncome);
    expenseData.push(dayExpense);
  });

  return {
    labels: dates,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        fill: true,
      },
      {
        label: "Expenses",
        data: expenseData,
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        fill: true,
      },
    ],
  };
});
const categoryChartData = computed(() => {
  const categories = {};
  Object.values(TransactionPerDate)
    .flat()
    .forEach((transaction) => {
      if (!categories[transaction.category]) {
        categories[transaction.category] = 0;
      }
      categories[transaction.category] += transaction.amount;
    });

  return {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: [
          "#22c55e",
          "#ef4444",
          "#3b82f6",
          "#f59e0b",
          "#8b5cf6",
          "#ec4899",
        ],
      },
    ],
  };
});
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.7)",
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
};
const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
};
</script>
