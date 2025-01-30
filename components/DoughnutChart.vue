<template>
  <div>
    <Doughnut
      :data="chartData"
      :options="options"
      style="width: 80%; height: 80%"
    />
  </div>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

defineProps({
  chartData: {
    type: Object,
    required: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});
</script>
