<template>
  <button
    type="button"
    :aria-pressed="isDark"
    :title="$t('theme.dark')"
    class="inline-flex min-h-11 min-w-11 items-center justify-center gap-3 text-ink transition-colors hover:bg-surface"
    @click="handleToggleTheme"
  >
    <span :class="labelClass">{{ $t("theme.dark") }}</span>
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      class="size-5"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  // Classes for the text label, e.g. visible in the phone menu only
  labelClass: {
    type: String,
    default: "sr-only",
  },
});

// "light" is written as a class too, so a visitor's choice beats the system setting
const isDark = useDark({ valueLight: "light" });

const handleToggleTheme = () => {
  isDark.value = !isDark.value;
};
</script>
