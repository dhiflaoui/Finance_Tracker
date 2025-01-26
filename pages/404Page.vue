<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold mb-4">Page Not Found</h1>
    <p class="text-lg mb-8">
      Sorry, the page you are looking for does not exist.
    </p>
    <nuxt-link to="/" class="text-blue-500 hover:underline"
      >Go back to Home</nuxt-link
    >
  </div>
</template>

<script setup>
// No additional script needed for this simple 404 page
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
