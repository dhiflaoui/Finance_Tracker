<template>
  <div>
    <div class="font-bold" :class="[color]">{{ title }}</div>
    <div class="text-2xl font-extrabold text-black dark:text-white mb-2">
      <USkeleton class="h-8 w-full" v-if="loading" />
      <div v-else>{{ currency }}</div>
    </div>
    <div>
      <USkeleton class="h-6 w-full" v-if="loading" />
      <div v-else class="flex space-x-1 items-center text-sm">
        <UIcon
          :name="icon"
          class="w-6 h-6"
          :class="{ green: trendingUp, red: !trendingUp }"
        />
        <span class="text-gray-500 dark:text-gray-400">
          {{ percentageTrend }} vs last period
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Trend",
  },
  amount: {
    type: String,
    default: "0",
  },
  lastAmount: {
    type: String,
    default: "0",
  },
  color: {
    type: String,
    default: "text-green-500",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const { amount } = toRefs(props);
const trendingUp = computed(() => {
  return props.amount >= props.lastAmount;
});
const icon = computed(() => {
  return trendingUp.value
    ? "i-heroicons-arrow-trending-up"
    : "i-heroicons-arrow-trending-down";
});
const { currency } = useCurrency(amount);
const percentageTrend = computed(() => {
  if (props.lastAmount === 0 || props.amount === 0) return "∞%";
  const bigger = Math.max(props.amount, props.lastAmount);
  const lower = Math.min(props.amount, props.lastAmount);
  const ratio = ((bigger - lower) / lower) * 100;
  return `${Math.ceil(ratio)}%`;
});
</script>

<style scoped>
.green {
  @apply text-green-600 dark:text-green-400;
}
.red {
  @apply text-red-600 dark:text-red-400;
}
</style>
