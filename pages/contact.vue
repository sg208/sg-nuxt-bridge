<template>
  <h1 class="text-2xl font-size-xl">
    This is <span class="font-bold">{{ $route.name }}</span> content
    <div class="text-red-500 underline">{{ fromScriptSetup }}</div>
    <div class="text-indigo-500 underline">{{ t("navigation.Team") }}</div>
    <div class="text-green-500 underline">{{ $t("navigation.About") }}</div>
  </h1>
</template>
<script setup>
const { t } = useI18nInScriptSetup();
const fromScriptSetup = t("page_Index.Hero-heading");
</script>
