<template>
  <section>
    <PageIntro
      :title="$t('navigation.Features')"
      :lead="$t('page_Features.lead')"
    />
    <FeatureList heading-tag="h2" />
  </section>
</template>

<script setup>
const { t } = useI18n();

useHead({ title: computed(() => t("navigation.Features")) });
</script>
