<template>
  <LegalPage page="page_Terms" :title="$t('navigation.Terms')" />
</template>

<script setup>
const { t } = useI18n();

useHead({ title: computed(() => t("navigation.Terms")) });
</script>
