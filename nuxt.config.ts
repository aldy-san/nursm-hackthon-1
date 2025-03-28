// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    "/": { prerender: true },
  },

  css: ["~/assets/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  icon: {
    serverBundle: {
      collections: ["uil", "mdi"], // <!--- this
    },
  },
  compatibilityDate: "2025-03-28",
});
