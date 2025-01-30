<template>
  <div class="flex flex-col h-screen">
    <!-- Fixed Header Section -->
    <div class="flex-none">
      <!-- Summary Header -->
      <section class="flex items-center justify-between mb-10">
        <h1 class="text-xl font-extrabold">Summary</h1>
        <div>
          <USelectMenu
            :options="transactionViewOptions"
            v-model="viewSelection"
          ></USelectMenu>
        </div>
      </section>

      <!-- Summary Cards -->
      <section
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10"
      >
        <Trend
          color="green"
          title="Total Income"
          :amount="incomeTotal"
          :lastAmount="prevIncomeTotal"
          :loading="pending"
        />
        <Trend
          color="red"
          title="Expenses"
          :amount="expenseTotal"
          :lastAmount="prevExpenseTotal"
          :loading="pending"
        />
        <Trend
          color="green"
          title="Investments"
          :amount="investmentsTotal"
          :lastAmount="0"
          :loading="pending"
        />
        <Trend
          color="green"
          title="Savings"
          :amount="savingsTotal"
          :lastAmount="0"
          :loading="pending"
        />
      </section>

      <!-- New Chart Section -->
      <!-- <section class="mb-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> -->
      <!-- Income vs Expenses Chart -->
      <!-- <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Income vs Expenses</h3>
            <div class="h-64">
              <LineChart />
            </div>
          </div> -->

      <!-- Category Distribution Chart -->
      <!-- <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Category Distribution</h3>
            <div class="h-64">
              <DoughnutChart />
            </div>
          </div>
        </div>
      </section> -->

      <!-- Transaction Header -->
      <section class="flex justify-between mb-10">
        <div>
          <h2 class="text-2xl font-extrabold">Transaction</h2>
          <div class="text-gray-500 dark:text-gray-400">
            You have {{ incomeCount }} incomes and {{ expenseCount }} expenses
            this period.
          </div>
        </div>
        <div class="flex items-center gap-4">
          <UButton
            :icon="
              isSearchOpen
                ? 'i-heroicons-x-mark'
                : 'i-heroicons-magnifying-glass'
            "
            color="white"
            variant="solid"
            :label="isSearchOpen ? 'Close' : 'Search'"
            @click="isSearchOpen = !isSearchOpen"
          />
          <TransactionModal v-model="isOpen" @saved="refresh()" />
          <UButton
            icon="i-heroicons-plus-circle"
            color="white"
            variant="solid"
            label="Add"
            @click="isOpen = true"
          />
        </div>
      </section>

      <!-- Search Section -->
      <section v-if="isSearchOpen" class="mb-4">
        <UFormGroup name="search" class="w-full md:w-96">
          <UInput
            v-model="searchQuery"
            type="text"
            placeholder="Search transactions..."
            icon="i-heroicons-magnifying-glass"
            @keyup.enter="handleSearch"
            clearable
          />
        </UFormGroup>
      </section>
    </div>

    <!-- Scrollable Transactions Section -->
    <div class="flex-1 overflow-y-auto">
      <section v-if="!pending">
        <div
          v-for="(transactionsOnDay, date) in byDate"
          :key="date"
          class="mb-6"
        >
          <DailyTransactionSummary
            v-if="viewSelection !== 'Daily'"
            :date="date"
            :transactions="transactionsOnDay"
            @toggle="toggleTransactions(date)"
          />
          <div
            v-show="!collapsedGroups[date]"
            class="pl-6 border-l-2 border-gray-100 dark:border-gray-800 ml-2"
          >
            <Transaction
              v-for="transaction in transactionsOnDay"
              :key="transaction.id"
              :transaction="transaction"
              @deleteTransaction="refresh()"
              @editTransaction="refresh()"
            />
          </div>
        </div>
      </section>
      <section v-else>
        <USkeleton class="h-10 w-full mb-2" v-for="i in 4" :key="i" />
      </section>
    </div>
  </div>
</template>
<script setup>
import { useSelectedTimePeriod } from "~/composables/useSelectedTimePeriod";
import { transactionViewOptions } from "~/constants";
const isOpen = ref(false);
const isSearchOpen = ref(false);
let searchQuery = ref("");
const user = useSupabaseUser();
const supabase = useSupabaseClient();
onMounted(async () => {
  // const {
  //   data: { users },
  // } = await supabase.auth.admin.listUsers();
  // console.log("users: ", users);
  console.log("user.value: ", user.value.id);
});

const viewSelection = ref(
  user.value.user_metadata?.transaction_view ?? transactionViewOptions[1]
);
const { current, previous } = useSelectedTimePeriod(viewSelection);

const {
  pending,
  refresh,
  transactions: {
    incomeTotal,
    expenseTotal,
    incomeCount,
    expenseCount,
    grouped: { byDate },
  },
  savingsTotal,
  investmentsTotal,
} = useFetchTransactions(current, user.value.id);
const {
  refresh: refreshPrevious,
  transactions: {
    incomeTotal: prevIncomeTotal,
    expenseTotal: prevExpenseTotal,
  },
} = useFetchTransactions(previous, user.value.id);
await Promise.all([refresh(), refreshPrevious()]);
const handleSearch = () => {
  transactionsOnDay.value.filter((transaction) => {
    return transaction.description.includes(searchQuery.value);
  });
};

const collapsedGroups = ref({});

const toggleTransactions = (date) => {
  collapsedGroups.value[date] = !collapsedGroups.value[date];
};

const formatTimePeriod = (view, period) => {
  const dailyDate = new Date(period.from);
  switch (view) {
    case "Yearly":
      return period.from.getFullYear();
    case "Monthly":
      return period.from.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    case "Weekly": {
      const weekStart = new Date(period.from);
      const weekEnd = new Date(period.to);
      weekEnd.setDate(weekEnd.getDate() + 6);
      return `${weekStart.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })} - ${weekEnd.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}`;
    }
    case "Daily":
      return dailyDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    default:
      return period;
  }
};
</script>
<style scoped>
.h-screen {
  height: 100vh;
}
</style>
