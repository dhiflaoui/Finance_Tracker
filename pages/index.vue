<template>
  <section class="flex items-center justify-between mb-10">
    <h1>Summary</h1>
    <div>
      <USelectMenu
        :options="transactionViewOptions"
        v-model="viewSelection"
      ></USelectMenu>
    </div>
  </section>
  <section
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10"
  >
    <Trend
      color="green"
      title="Total Income"
      amount="1000"
      lastAmount="100"
      :loading="false"
    />
    <Trend
      color="red"
      title="Expenses"
      amount="1000"
      lastAmount="100"
      :loading="false"
    />
    <Trend
      color="green"
      title="Investments"
      amount="1000"
      lastAmount="100"
      :loading="false"
    />
    <Trend
      color="red"
      title="Savings"
      amount="0"
      lastAmount="0"
      :loading="false"
    />
  </section>
  <section>
    <Transaction
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />
  </section>
</template>
<script setup>
import Trend from "./components/trend.vue";
import Transaction from "./components/transaction.vue";
import { ref } from "vue";
import { transactionViewOptions } from "~/constants";
const viewSelection = ref(transactionViewOptions[1]);
const supabase = useSupabaseClient();
const transactions = ref([]);
const { data, error } = await useAsyncData("transactions", async () => {
  const { data, error } = await supabase.from("transactions").select();
  if (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Transactions not found",
    });
  }
  return data;
});

transactions.value = data.value;
</script>
