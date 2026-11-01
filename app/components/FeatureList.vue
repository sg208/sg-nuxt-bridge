<template>
  <ul class="frame">
    <li
      v-for="feature in features"
      :key="feature.name"
      class="reveal grid gap-2 px-4 py-7 odd:bg-surface sm:px-6 md:grid-cols-12 md:items-baseline md:gap-6 md:py-9"
    >
      <component
        :is="headingTag"
        class="text-[clamp(1.5rem,1.1rem+1.5vw,2.5rem)] leading-tight font-semibold tracking-[-0.03em] md:col-span-5"
      >
        {{ feature.name }}
      </component>
      <p class="max-w-[46ch] md:col-span-6 md:col-start-7">
        {{ feature.text }}
      </p>
    </li>
  </ul>
</template>

<script setup>
import { features } from "~/data/features";

defineProps({
  headingTag: {
    type: String,
    default: "h3",
  },
});
</script>
