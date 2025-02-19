<script setup>
defineProps({
  pending: {
    type: Boolean,
    required: true,
  },
  transactions: {
    type: Object,
    required: true,
  },
  collapsedGroups: {
    type: Object,
    required: true,
  },
  viewSelection: {
    type: String,
    required: true,
  },
  expenseTotal: {
    type: Number,
    required: true,
  },
});
defineEmits(["toggle-group", "transaction-updated"]);
</script>
<template>
  <div class="flex-1 overflow-y-auto">
    <section v-if="!pending">
      <div
        v-for="(transactionsOnDay, period) in transactions"
        :key="period"
        class="mb-6"
      >
        <DailyTransactionSummary
          v-if="viewSelection !== 'Daily'"
          :date="period"
          :transactions="transactionsOnDay"
          @toggle="$emit('toggle-group', period)"
          :viewSelection="viewSelection"
        />
        <div
          v-show="!collapsedGroups[period]"
          class="pl-6 border-l-2 border-gray-100 dark:border-gray-800 ml-2"
        >
          <Transaction
            v-for="transaction in transactionsOnDay"
            :key="transaction.id"
            :transaction="transaction"
            @deleteTransaction="$emit('transaction-updated')"
            @editTransaction="$emit('transaction-updated')"
            :viewSelection="viewSelection"
            :expenseTotal="expenseTotal"
          />
        </div>
      </div>
    </section>
    <section v-else>
      <USkeleton class="h-10 w-full mb-2" v-for="i in 4" :key="i" />
    </section>
  </div>
</template>
