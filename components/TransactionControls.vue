<script setup>
defineProps({
  filteredStats: {
    type: Object,
    required: true,
  },
  isSearchOpen: {
    type: Boolean,
    required: true,
  },
  searchQuery: {
    type: String,
    required: true,
  },
  isModalOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits([
  "toggleSearch",
  "closeSearch",
  "clearSearch",
  "update:searchQuery",
  "update:isModalOpen",
  "transactionSaved",
]);
</script>
<template>
  <div>
    <h2 class="text-2xl font-extrabold">Transaction</h2>
    <div class="text-gray-500 dark:text-gray-400">
      You have {{ filteredStats.incomeCount }} incomes and
      {{ filteredStats.expenseCount }} expenses this period.
    </div>
  </div>

  <div class="flex items-center gap-4">
    <!-- Search Input with Nuxt Transition -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-show="isSearchOpen" class="w-60">
        <UInput
          :model-value="searchQuery"
          type="text"
          placeholder="Search transactions..."
          icon="i-heroicons-magnifying-glass"
          clearable
          @keyup.escape="$emit('closeSearch')"
          @clear="$emit('clearSearch')"
          @update:model-value="$emit('update:searchQuery', $event)"
        />
      </div>
    </transition>

    <!-- Search Toggle Button -->
    <UButton
      :icon="
        isSearchOpen ? 'i-heroicons-x-mark' : 'i-heroicons-magnifying-glass'
      "
      color="white"
      variant="solid"
      :label="isSearchOpen ? '' : 'Search'"
      @click="$emit('toggleSearch')"
    />

    <!-- Add Transaction Button -->
    <TransactionModal
      :model-value="isModalOpen"
      @update:model-value="$emit('update:isModalOpen', $event)"
      @saved="$emit('transactionSaved')"
    />
    <UButton
      icon="i-heroicons-plus-circle"
      color="white"
      variant="solid"
      label="Add"
      @click="$emit('update:isModalOpen', true)"
    />
  </div>
</template>
