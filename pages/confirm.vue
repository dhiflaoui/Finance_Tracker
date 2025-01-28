<template>
  <NuxtLayout name="empty">
    <div class="spinner-container">
      <div class="spinner"></div>
      <h1 class="loading-text">
        Please hold on while we process your request...
      </h1>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const route = router.currentRoute.value;
const isLoading = ref(true); // Add a loading state

onMounted(() => {
  if (!route.query.error) {
    isLoading.value = false;
    router.push({ path: "/" });
  } else {
    router.push({ path: "/login" });
  }
});

useRedirectIfAuth();
definePageMeta({
  layout: "empty",
});
</script>

<style scoped>
.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin-top: 100px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}
.loading-text {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #374151;
  margin-top: 1rem;
  text-align: center;
  line-height: 1.4;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
