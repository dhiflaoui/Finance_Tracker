<script setup>
import { transactionViewOptions } from "~/constants";
const emit = defineEmits(["update:viewSelection"]);
const props = defineProps({
  viewSelection: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-xl font-extrabold">Summary</h1>
  <div>
    <USelectMenu
      :options="transactionViewOptions"
      :model-value="viewSelection"
      @update:model-value="emit('update:viewSelection', $event)"
    ></USelectMenu>
  </div>
</template>
