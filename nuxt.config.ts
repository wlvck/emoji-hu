// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,

  components: [
    { path: '~/components', pathPrefix: true }
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "vuetify-nuxt-module",
    "@pinia/nuxt"
  ],
  css: ['@/assets/css/style.css']
});