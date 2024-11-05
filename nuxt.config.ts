// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "@nuxtjs/supabase"],
  supabase: {
    redirect: true,
  },
  colorMode: {
    preference: "system", // Default mode ('light', 'dark', or 'system')
    fallback: "light", // Fallback mode if no preference is set
    classSuffix: "", // Optional suffix for class names
  },
});
