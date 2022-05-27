// create a new instance of vue-i18n to use t('yourkeyhere')...
// within script setup. $t() from nuxtjs/i18n can only be used within template
import { createI18n, useI18n } from "vue-i18n-composable";

export function useI18nInScriptSetup() {
  return useI18n(createI18n());
}
