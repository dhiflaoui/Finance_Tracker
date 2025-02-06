<template>
  <div>
    <div class="font-bold" :class="[color]">
      {{ title }}
      <UIcon :name="getIconName" :class="getIconColor" />
    </div>

    <div class="text-2xl font-extrabold text-black dark:text-white mb-2">
      <USkeleton v-if="loading" class="h-8 w-full" />
      <div v-else>{{ currency }}</div>
    </div>

    <!-- <div>
      <USkeleton v-if="loading" class="h-6 w-full" />
      <div v-else class="flex space-x-1 items-center text-sm">
        <UIcon
          v-if="showTrend"
          :name="trendIcon"
          class="w-6 h-6"
          :class="trendColorClass"
        />
        <span v-if="showTrend" class="text-gray-500 dark:text-gray-400">
          {{ percentageTrend }} vs last period
        </span>
      </div>
    </div> -->
  </div>
</template>

<script setup>
const ICON_MAPPING = {
  "Total Income": { name: "i-heroicons-arrow-up", color: "text-green-500" },
  Expenses: { name: "i-heroicons-arrow-down", color: "text-red-500" },
  Investments: { name: "i-heroicons-chart-pie", color: "text-purple-500" },
  Savings: { name: "i-heroicons-banknotes", color: "text-blue-500" },
};

const DEFAULT_ICON = {
  name: "i-heroicons-question-mark-circle",
  color: "text-gray-500",
};

const props = defineProps({
  title: {
    type: String,
    default: "Trend",
  },
  amount: {
    type: Number,
    default: 0,
  },
  lastAmount: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "text-green-500",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  showTrend: {
    type: Boolean,
    default: true,
  },
});

const { amount } = toRefs(props);
const { currency } = useCurrency(amount);

const getIconName = computed(
  () => ICON_MAPPING[props.title]?.name || DEFAULT_ICON.name
);

const getIconColor = computed(
  () => ICON_MAPPING[props.title]?.color || DEFAULT_ICON.color
);

// const trendingUp = computed(() => props.amount >= props.lastAmount);

// const trendIcon = computed(() =>
//   trendingUp.value ? "i-heroicons-arrow-up" : "i-heroicons-arrow-down"
// );

// const trendColorClass = computed(() => ({
//   "text-green-600 dark:text-green-400": trendingUp.value,
//   "text-red-600 dark:text-red-400": !trendingUp.value,
// }));

// const percentageTrend = computed(() => {
//   if (props.lastAmount === 0 || props.amount === 0) return "∞%";

//   const bigger = Math.max(props.amount, props.lastAmount);
//   const lower = Math.min(props.amount, props.lastAmount);
//   const ratio = ((bigger - lower) / lower) * 100;

//   return `${Math.ceil(ratio)}%`;
// });
</script>
<style scoped>
.green {
  color: #16a34a; /* text-green-600 */
  color: #4ade80; /* dark:text-green-400 */
}
.red {
  color: #dc2626; /* text-red-600 */
  color: #f87171; /* dark:text-red-400 */
}
</style>
