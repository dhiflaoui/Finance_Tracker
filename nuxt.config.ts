// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "@nuxtjs/supabase"],
  supabase: {
    redirect: true,
    cookieOptions: {
      maxAge: 172800, // 48 hours in seconds
      sameSite: "lax",
      secure: true,
    },
  },
  colorMode: {
    preference: "system", // Default mode ('light', 'dark', or 'system')
    fallback: "light", // Fallback mode if no preference is set
    classSuffix: "", // Optional suffix for class names
  },
  runtimeConfig: {
    public: {
      // baseUrl:
      //   process.env.NODE_ENV === "production"
      //     ? process.env.SITE_URL
      //     : "http://localhost:3000",
      baseUrl: process.env.SITE_URL ?? "http://localhost:3000",
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  experimental: {
    payloadExtraction: false,
  },
});
