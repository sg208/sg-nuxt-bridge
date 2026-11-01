<template>
  <LegalPage page="page_Privacy" :title="$t('navigation.Privacy')" />
</template>

<script setup>
const { t } = useI18n();

useHead({ title: computed(() => t("navigation.Privacy")) });
</script>
