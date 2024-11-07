<template>
  <div>
    <n-tabs v-model="activeTab">
      <n-tab name="tab1" label="SignIn"></n-tab>
      <n-tab name="tab2" label="SignUp"></n-tab>
    </n-tabs>

    <div v-if="activeTab === 'tab1'">
      <Login />
    </div>
    <div v-else-if="activeTab === 'tab2'">
      <SignUp />
    </div>
  </div>
</template>
>

<script setup>
const activeTab = ref("tab1");
</script>
