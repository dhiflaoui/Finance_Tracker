<template>
  <NuxtLayout name="empty">
    <main
      class="min-h-screen bg-slate-900 flex items-center justify-center p-4"
    >
      <div class="max-w-lg w-full">
        <div class="space-y-6 text-center">
          <!-- 404 Error -->
          <template v-if="error.statusCode === 404">
            <div class="relative w-4/5 mx-auto aspect-square">
              <img
                src="@/assets/404.jpg"
                alt="Page not found illustration"
                class="object-contain w-full h-full"
              />
            </div>
            <h1 class="text-3xl font-bold text-slate-100">Page Not Found</h1>
            <p class="text-lg text-slate-300">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </template>

          <!-- Generic Error -->
          <template v-else>
            <div class="relative w-4/5 mx-auto aspect-square">
              <img
                src="@/assets/error.jpg"
                alt="Error illustration"
                class="object-contain w-full h-full"
              />
            </div>
            <h1 class="text-3xl font-bold text-red-400">
              {{
                error?.statusCode
                  ? `Error ${error.statusCode}`
                  : "Something Went Wrong"
              }}
            </h1>
            <p class="text-lg text-slate-300">
              {{
                error?.message ||
                "An unexpected error occurred. Please try again."
              }}
            </p>
          </template>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="handleReturn"
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-teal-600 rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
            >
              Return to Dashboard
            </button>
            <button
              v-if="error?.statusCode !== 404"
              @click="handleRetry"
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-teal-600 bg-transparent border-2 border-teal-600 rounded-xl hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
const router = useRouter();

const handleReturn = () => {
  clearError({
    redirect: "/",
  });
};

const handleRetry = () => {
  clearError();
  router.go(0); // Refresh the current page
};

// Add meta tags for better SEO
useHead({
  title: error.value?.statusCode === 404 ? "Page Not Found" : "Error Occurred",
  meta: [
    {
      name: "description",
      content:
        error.value?.statusCode === 404
          ? "The page you are looking for could not be found."
          : "An error occurred while loading the page.",
    },
  ],
});
</script>
