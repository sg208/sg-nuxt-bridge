<template>
  <div>
    <h1 class="text-2xl font-size-xl">
      This is <span class="font-bold">{{ $route.name }}</span> content
    </h1>
    <div class="text-2xl text-red-500 underline">
      {{ $t("page_Index.Hero-heading") }}
    </div>
    <div class="text-2xl text-indigo-500 underline">{{ subHeading }}</div>
    <div class="text-2xl text-green-500 underline">
      {{ t("navigation.Features") }}
    </div>
  </div>
</template>

<script setup>
const { t } = useI18nInScriptSetup();

const subHeading = t("page_Index.Hero-subheading");
</script>
