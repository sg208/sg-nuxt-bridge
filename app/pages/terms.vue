<template>
  <TranslationDemo :title="$t('navigation.Terms')" :rows="rows" />
</template>

<script setup>
const { t } = useI18n();
const route = useRoute();

const rows = computed(() => [
  { label: "Route name", value: String(route.name) },
  { label: "$t in template", value: t("page_Index.Hero-heading") },
  { label: "t in script setup", value: t("page_Index.Hero-subheading") },
  { label: "Navigation label", value: t("navigation.Features") },
]);
</script>
