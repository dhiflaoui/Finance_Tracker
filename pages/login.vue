<template>
  <UTabs
    v-model="selectedTab"
    :items="items"
    class="w-full"
    :defaultIndex="defaultSelectedTab"
  >
    <!-- <template #icon="{ item, selected }">
      <UIcon
        :name="item.icon"
        class="w-4 h-4 flex-shrink-0 me-2"
        :class="[selected && 'text-primary-500 dark:text-primary-400']"
      />
    </template> -->
    <template #signIn="{ item }">
      <UCard>
        <template #header>
          <p
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Sign-in to Finance Tracker
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            or create an account
            <span class="cursor-pointer text-blue-500" @click="switchTab">
              here
            </span>
          </p>
        </template>
        <SignIn />
      </UCard>
    </template>

    <template #signUp="{ item }">
      <SignUp :item="item" @saved="defaultTabChange()" />
    </template>
  </UTabs>
</template>
<script setup>
import SignIn from "~/components/auth/SignIn.vue";
import SignUp from "~/components/auth/SignUp.vue";
import { ref } from "vue";
definePageMeta({
  middleware: "auth",
});
const items = [
  {
    slot: "signIn",
    label: "SignIn",
    icon: "i-heroicons-user-circle",
  },
  {
    slot: "signUp",
    label: "SignUp",
    icon: "i-heroicons-user-circle",
  },
];

let selectedTab = ref(1);
let defaultSelectedTab = ref(0);
function switchTab() {
  selectedTab.value = 1;
}
function defaultTabChange() {
  defaultSelectedTab.value = 1;
  console.log("defaultSelectedTab.value : ", defaultSelectedTab.value);
}
</script>
