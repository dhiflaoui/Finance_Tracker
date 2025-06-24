<template>
  <SignIn />
</template>
<script setup>
import SignIn from "~/components/auth/SignIn.vue";
definePageMeta({
  middleware: "auth",
  layout: false,
});
</script>
