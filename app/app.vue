<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const siteName = "sg-nuxt-bridge";

useHead({
  titleTemplate: (title) =>
    title && title !== siteName ? `${title} · ${siteName}` : siteName,
});
</script>
