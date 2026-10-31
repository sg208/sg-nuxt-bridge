<template>
  <div class="container grid mx-auto text-center">
    <div class="grid-cols-12 mt-10" />
    <div class="grid-cols-12 mt-10">
      <nuxt-link
        v-for="item in availableLocales"
        :key="item.code"
        :to="switchLocalePath(item.code)"
        class="px-5 py-2 mr-5 border-2 border-solid rounded-md shadow-md"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() =>
  locales.value.filter((item) => item.code !== locale.value),
);
</script>
