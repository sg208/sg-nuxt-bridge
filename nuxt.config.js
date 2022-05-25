import { defineNuxtConfig } from "@nuxt/bridge";
import i18nOptions from "./locales/i18n";

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
    title: "sg-nuxt-bridge",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css", "@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/i18n"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components", "~/components/layouts"],
  },

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
      transpile: ["pinia"],
    },
  },
  generate: {
    fallback: "404.html",
  },
  // i18n options is moved to ./locales/i18n.js
  i18n: i18nOptions,
  axios: {
    baseURL: "base url here", // Used as fallback if no runtime config is provided
  },
});
