<template>
  <LegalPage
    page="page_Accessibility"
    :title="$t('navigation.Accessibility')"
  />
</template>

<script setup>
const { t } = useI18n();

useHead({ title: computed(() => t("navigation.Accessibility")) });
</script>
