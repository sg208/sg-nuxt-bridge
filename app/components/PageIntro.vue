<template>
  <div class="frame grid gap-6 pt-16 pb-16 md:grid-cols-12 md:pt-24 md:pb-24">
    <h1
      class="rise text-[clamp(2.5rem,1.4rem+4.4vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.04em] md:col-span-9"
    >
      {{ title }}
    </h1>
    <p
      v-if="lead"
      class="rise max-w-[44ch] text-[clamp(1.1875rem,1.05rem+0.5vw,1.5rem)] leading-snug md:col-span-6"
      style="--delay: 90ms"
    >
      {{ lead }}
    </p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  lead: {
    type: String,
    default: "",
  },
});
</script>
