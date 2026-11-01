import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-31",
  ssr: false,

  app: {
    baseURL: "/",
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "sg-nuxt-bridge",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "A Nuxt 4 starter with landing, blog, pricing and team pages.",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: [
    "@fontsource-variable/epilogue",
    "~/assets/css/tailwind.css",
    "~/assets/css/main.css",
  ],

  // Components in app/components/layouts keep their short names (GlobalNav, not LayoutsGlobalNav)
  components: [{ path: "~/components", pathPrefix: false }],

  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/i18n", "@nuxt/eslint"],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        language: "en-US",
        dir: "ltr",
        file: "en.json",
      },
    ],
    strategy: "no_prefix",
    defaultLocale: "en",
    detectBrowserLanguage: false,
  },
});
