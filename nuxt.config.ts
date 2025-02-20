// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
    "@formkit/auto-animate/nuxt",
  ],
  image: {
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
    }
  },
  fonts: {
    families: [
      { name: "AdamMedium", src: "/fonts/Adam-Medium.ttf" },
      { name: "AdamLight", src: "/fonts/Adam-Light.ttf" },
      { name: "AdamBold", src: "/fonts/Adam-Bold.ttf" },
    ],
  },
});