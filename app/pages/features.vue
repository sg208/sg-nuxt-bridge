<template>
  <section>
    <PageIntro
      title="Our features"
      lead="Check out our list of awesome features below."
    />
    <FeatureList heading-tag="h2" />
  </section>
</template>

<script setup>
const { t } = useI18n();

useHead({ title: computed(() => t("navigation.Features")) });
</script>
