import { defineNuxtConfig } from "@nuxt/bridge";
import i18n from "./locales/i18n";

export default defineNuxtConfig({
  bridge: {
    nitro: false,
  },
  ssr: false,
  app: {
    baseURL: "/",
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "engganuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@pinia/nuxt", "@vueuse/nuxt"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n", "@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    build: {
      transpile: [
        // necessary for nuxt bridge
        "pinia",
      ],
    },
    fallback: "404.html",
  },
  generate: {
    fallback: "404.html",
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: i18n.en,
        fr: i18n.fr,
        es: i18n.es,
      },
    },
  },
  axios: {
    baseURL: "https://www.sorasirulo.com/wp-json/wp/v2/", // Used as fallback if no runtime config is provided
  },
});
