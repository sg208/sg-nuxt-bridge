<template>
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" :d="socialIcons[name]" />
  </svg>
</template>

<script setup>
import { socialIcons } from "~/data/social";

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
