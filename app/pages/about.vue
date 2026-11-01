<template>
  <div class="pt-16 md:pt-24">
    <TestimonialSection :title="$t('navigation.About')" heading-tag="h1" />
  </div>
</template>

<script setup>
const { t } = useI18n();

useHead({ title: computed(() => t("navigation.About")) });
</script>
