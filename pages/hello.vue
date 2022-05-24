<template>
  <div class="container grid mx-auto text-center">
    <div class="grid-cols-12 mt-10"></div>
    <div class="grid-cols-12 mt-10">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="px-5 py-2 mr-5 border-2 border-solid rounded-md shadow-md"
      >
        {{ locale.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
