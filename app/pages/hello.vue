<template>
  <TranslationDemo title="Hello" :rows="rows" />
</template>

<script setup>
const { t } = useI18n();
const route = useRoute();

const rows = computed(() => [
  { label: "Route name", value: String(route.name) },
  { label: "t in script setup", value: t("page_Index.Hero-heading") },
  { label: "Navigation label", value: t("navigation.Team") },
  { label: "Navigation label", value: t("navigation.About") },
]);
</script>
