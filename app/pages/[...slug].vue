<template>
  <PageIntro
    :title="$t('page_Error.page-not-found')"
    :lead="$t('page_Error.lead')"
  >
    <div class="md:col-span-12">
      <NuxtLink to="/" class="button">
        {{ $t("page_Error.homepage") }}
      </NuxtLink>
    </div>
  </PageIntro>
</template>

<script setup>
// Unknown paths render here instead of throwing a router 404, so the app
// boots without logging an error. The Worker still answers them with 404.
const { t } = useI18n();

useHead({ title: computed(() => t("page_Error.page-not-found")) });
</script>
