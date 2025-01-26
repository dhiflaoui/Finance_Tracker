<template>
  <NuxtLayout>
    <div class="error-container">
      <div>
        <template v-if="error.statusCode === 404">
          <div class="error-icon">
            <img
              src="@/assets/404.jpg"
              alt="Page not found"
              class="mx-auto"
              style="display: block; margin: 0 auto; width: 80%; height: auto"
            />
          </div>
          <p class="error-message">
            The page you're looking for doesn't exist.
          </p>
        </template>
        <!-- TODO: WORK ON IT -->
        <template v-else>
          <div class="error-icon">
            <!-- <img src="@/assets/error.svg" alt="Error occurred" /> -->
          </div>
          <h1 class="error-title">Oops! Something went wrong</h1>
          <p class="error-message">
            <strong>{{
              error.message || "An unexpected error occurred."
            }}</strong>
          </p>
        </template>
        <button @click="handleError" class="dashboard-button">
          Return to Dashboard
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e293b; /* Dark background */
  color: #f1f5f9; /* Light text */
  text-align: center;
}

.error-content {
  max-width: 500px;
  padding: 20px;
  border-radius: 12px;
  background-color: #334155; /* Slightly lighter dark */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.error-icon img {
  width: 120px;
  height: auto;
  margin-bottom: 20px;
}

.error-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #f87171; /* Soft red for errors */
}

.error-message {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #cbd5e1; /* Muted light color */
}

.dashboard-button {
  display: inline-block;
  background-color: #3b82f6; /* Blue button */
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}

.dashboard-button:hover {
  background-color: #2563eb; /* Darker blue */
}
</style>
