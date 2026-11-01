<template>
  <nav
    :aria-label="$t('a11y.primary-nav')"
    class="frame relative flex h-20 items-center justify-between gap-6"
    @focusout="handleFocusOut"
  >
    <NuxtLink
      to="/"
      :aria-label="$t('a11y.home')"
      class="text-[1.375rem] font-semibold tracking-[-0.03em]"
    >
      brands<span class="text-accent">.</span>
    </NuxtLink>

    <button
      ref="menuButton"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="global-nav-menu"
      :aria-label="$t('a11y.menu')"
      class="-mr-2 inline-flex size-11 items-center justify-center hover:bg-surface md:hidden"
      @click="handleToggleMenu"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        class="size-6"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
      >
        <path v-if="isMenuOpen" d="M6 6l12 12M18 6L6 18" />
        <path v-else d="M4 8h16M4 16h16" />
      </svg>
    </button>

    <div
      id="global-nav-menu"
      class="absolute inset-x-0 top-full z-40 flex-col gap-6 bg-surface px-4 pt-4 pb-6 shadow-[0_12px_24px_-12px_rgb(0_0_0/0.25)] sm:px-6 md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-between md:bg-transparent md:p-0 md:shadow-none"
      :class="isMenuOpen ? 'flex' : 'hidden'"
    >
      <ul class="flex flex-col md:mx-auto md:flex-row md:items-center md:gap-1">
        <li v-for="nav in navigations.header" :key="nav.name">
          <NuxtLink
            :to="nav.path"
            class="nav-link block py-3 text-lg md:px-3 md:py-2 md:text-[0.9375rem]"
          >
            {{ $t(`navigation.${nav.name}`) }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
        <a href="#" class="text-link py-2 md:text-[0.9375rem]">
          {{ $t("account.sign-in") }}
        </a>
        <NuxtLink to="/pricing" class="button md:text-[0.9375rem]">
          {{ $t("account.sign-up") }}
        </NuxtLink>
        <ThemeToggle
          class="-ml-1 px-1 md:-mr-3 md:ml-0 md:px-0"
          label-class="md:sr-only"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
const navigations = useNavigationStore();
const route = useRoute();

const isMenuOpen = ref(false);

const handleToggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menuButton = useTemplateRef("menuButton");

const handleKeydown = (event) => {
  if (event.key !== "Escape" || !isMenuOpen.value) return;
  const nav = menuButton.value?.closest("nav");
  const isFocusInside = nav?.contains(document.activeElement);
  isMenuOpen.value = false;
  if (isFocusInside) menuButton.value?.focus();
};

const handleFocusOut = (event) => {
  if (!isMenuOpen.value || !event.relatedTarget) return;
  if (!event.currentTarget.contains(event.relatedTarget)) {
    isMenuOpen.value = false;
  }
};

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  },
);

useEventListener("keydown", handleKeydown);
</script>

<style scoped>
.nav-link {
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.45em;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.2s ease;
}
.nav-link:hover {
  text-decoration-color: color-mix(in srgb, currentColor 35%, transparent);
}
.nav-link.router-link-exact-active {
  text-decoration-color: var(--accent);
}
</style>
