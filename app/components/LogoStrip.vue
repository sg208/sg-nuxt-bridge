<template>
  <section aria-labelledby="logos-heading" class="frame">
    <h2
      id="logos-heading"
      class="max-w-[22ch] text-[clamp(1.5rem,1.1rem+1.5vw,2.5rem)] leading-tight font-semibold tracking-[-0.03em]"
    >
      Trusted by top-leading companies.
    </h2>
    <ul class="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
      <li
        v-for="logo in logos"
        :key="logo.name"
        class="flex h-28 items-center justify-center bg-surface px-6"
      >
        <img
          :src="logo.src"
          :alt="logo.name"
          width="120"
          height="32"
          loading="lazy"
          class="logo h-7 w-auto max-w-full"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { logos } from "~/data/testimonials";
</script>

<style scoped>
.logo {
  filter: var(--logo-filter);
  opacity: 0.8;
}
</style>
