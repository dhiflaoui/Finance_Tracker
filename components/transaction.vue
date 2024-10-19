<template>
  <div
    class="grid grid-cols-2 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100"
  >
    <div class="flex space-x-2 items-center justify-between">
      <div class="flex items-center space-x-1">
        <UIcon :name="icon" :class="[iconColor]" />
        <div>{{ transaction.description }}</div>
      </div>
      <div>
        <UBadge color="white" v-if="transaction.category">{{
          transaction.category
        }}</UBadge>
      </div>
    </div>
    <div class="flex items-center justify-end space-x-2">
      <div>{{ currency }}</div>
      <div>
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UButton
            color="white"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal"
          />
        </UDropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
/* TODO: add currency param to useCurrency hook */
const props = defineProps({
  transaction: {
    type: Object,
    default: {},
  },
});
const { currency } = useCurrency(props.transaction.amount);
const items = [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square",
      color: "white",
      variant: "ghost",
      click: () => {},
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash",
      color: "white",
      variant: "ghost",
      click: () => {},
    },
  ],
];
const isIncome = computed(() => {
  return props.transaction.type === "Income";
});
const icon = computed(() => {
  return isIncome.value
    ? "i-heroicons-arrow-up-right"
    : "i-heroicons-arrow-down-left";
});
const iconColor = computed(() => {
  return isIncome.value ? "text-green-600" : "text-red-600";
});
</script>

<style lang="scss" scoped></style>
