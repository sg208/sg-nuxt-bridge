<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      {{ $t("page_Error.page-not-found") }}
    </h1>
    <h1 v-else>{{ $t("page_Error.error-occured") }}</h1>
    <nuxt-link to="/">{{ $t("page_Error.homepage") }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
