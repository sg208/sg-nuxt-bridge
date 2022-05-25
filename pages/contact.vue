<template>
  <h1 class="text-2xl font-size-xl">
    This is <span class="font-bold">{{ $route.name }}</span> content
    <span class="underline">{{ fromScriptSetup }}</span>
    <span class="underline">{{ t("navigation.Team") }}</span>
    <span class="underline">{{ $t("navigation.About") }}</span>
  </h1>
</template>
<script setup>
import { useI18n } from "vue-i18n-composable";

const { t } = useI18n();

const fromScriptSetup = t("navigation.Terms");
</script>
