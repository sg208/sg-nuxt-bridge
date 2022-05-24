// Import all the specific cultures here
import en from "./en.json";

export default {
  locales: [
    {
      code: "en",
      name: "English",
    },
  ],
  strategy: "no_prefix",
  defaultLocale: "en",
  detectBrowserLanguage: false,
  vueI18n: {
    legacy: false,
    fallbackLocale: "en",
    locale: "en",
    messages: {
      en,
    },
  },
};
