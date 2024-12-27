<template>
  <div>
    <div
      class="grid grid-cols-2 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      @click="isCollapsed = !isCollapsed"
    >
      <div class="flex space-x-2 items-center">
        <UIcon
          :name="isCollapsed ? 'i-heroicons-chevron-right' : 'i-heroicons-chevron-down'"
          class="w-5 h-5"
        />
        <div>
          <span class="font-medium text-gray-900 dark:text-gray-100">{{ formattedDate }}</span>
          <span class="text-sm ml-2">({{ transactions.length }} transactions)</span>
        </div>
      </div>
      <div class="flex items-center justify-end mr-10 space-x-4">
        <div class="flex flex-col items-end">
          <span class="font-medium" :class="sum > 0 ? 'text-green-600' : 'text-red-600'">{{ currency }}</span>
          <div class="text-xs">
            <span class="text-green-600">+{{ incomeCurrency }}</span> /
            <span class="text-red-600">-{{ expenseCurrency }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Add collapsible content here -->
  </div>
</template>

<script setup>
const emit = defineEmits(['toggle']);

const props = defineProps({
  date: {
    type: String,
  },
  transactions: {
    type: Array,
    default: [],
  },
});

const sum = computed(() => {
  let sum = 0;
  for (const transaction of props.transactions) {
    if (transaction.type === "Income") {
      sum += transaction.amount;
    } else {
      sum -= transaction.amount;
    }
  }
  return sum;
});
const { currency } = useCurrency(sum);

const income = computed(() => {
  let income = 0;
  for (const transaction of props.transactions) {
    if (transaction.type === "Income") {
      income += transaction.amount;
    }
  }
  return income;
});
const { currency: incomeCurrency } = useCurrency(income);

const expense = computed(() => {
  let expense = 0;
  for (const transaction of props.transactions) {
    if (transaction.type === "Expense") {
      expense += transaction.amount;
    }
  }
  return expense;
});
const { currency: expenseCurrency } = useCurrency(expense);

const formattedDate = computed(() => {
  const date = new Date(props.date);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
});

const isCollapsed = ref(true);

watch(isCollapsed, (value) => {
  emit('toggle');
});
</script>

<style scoped>
.daily-summary {
  transition: all 0.3s ease;
}
</style>
