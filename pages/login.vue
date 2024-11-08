<template>
  <UTabs
    :items="items"
    variant="link"
    class="gap-4 w-full"
    :ui="{ trigger: 'flex-1' }"
  >
    <template #signIn>
      <UCard>
        <template #header>
          <p
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Sign-in to Finance Tracker
          </p>
          <!-- TODO: upgrade nuxtUi to lmake it work -->
          <!-- <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            New user? Sign up
            <span class="cursor-pointer text-blue-500" @click="switchTab">
              here
            </span>
          </p> -->
        </template>
        <SignIn />
      </UCard>
    </template>

    <template #signUp>
      <UCard>
        <template #header>
          <p
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Sign-Up for the Finance Tracker
          </p>
        </template>
        <SignUp />
      </UCard>
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
  },
  {
    slot: "signUp",
    label: "SignUp",
  },
];
const activeTab = ref("signIn");
const switchTab = () => {
  activeTab.value = "signUp";
};
</script>
