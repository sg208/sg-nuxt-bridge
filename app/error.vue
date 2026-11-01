<template>
  <NuxtLayout>
    <PageIntro
      :title="
        isNotFound
          ? $t('page_Error.page-not-found')
          : $t('page_Error.error-occured')
      "
      :lead="isNotFound ? $t('page_Error.lead') : ''"
    >
      <div class="md:col-span-12">
        <NuxtLink to="/" class="button" @click.prevent="handleGoHome">
          {{ $t("page_Error.homepage") }}
        </NuxtLink>
      </div>
    </PageIntro>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
});

const { t } = useI18n();

const isNotFound = computed(() => props.error?.statusCode === 404);

useHead({
  titleTemplate: "%s · sg-nuxt-bridge",
  title: computed(() =>
    isNotFound.value
      ? t("page_Error.page-not-found")
      : t("page_Error.error-occured"),
  ),
});

const handleGoHome = () => clearError({ redirect: "/" });
</script>
