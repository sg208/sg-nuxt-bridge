<template>
  <div>
    <h1 v-if="error?.statusCode === 404">
      {{ $t("page_Error.page-not-found") }}
    </h1>
    <h1 v-else>{{ $t("page_Error.error-occured") }}</h1>
    <button type="button" @click="handleGoHome">
      {{ $t("page_Error.homepage") }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: null,
  },
});

const handleGoHome = () => clearError({ redirect: "/" });
</script>
