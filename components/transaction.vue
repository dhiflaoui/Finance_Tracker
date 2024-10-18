<template>
  <div
    class="grid grid-cols-2 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100"
  >
    <div class="flex space-x-2 items-center justify-between">
      <div class="flex items-center space-x-1">
        <UIcon name="i-heroicons-arrow-down-left" class="w-6 h-6" />
        <div>Salary</div>
      </div>
      <div><UBadge color="white">Category</UBadge></div>
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
const { currency } = useCurrency("");
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
</script>

<style lang="scss" scoped></style>
