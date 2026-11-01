<template>
  <div class="flex min-h-svh flex-col bg-ground text-ink">
    <a
      href="#main"
      class="sr-only z-50 bg-ink px-4 py-3 text-ground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      {{ $t("a11y.skip") }}
    </a>
    <header>
      <GlobalHeader />
    </header>
    <main id="main" tabindex="-1" class="flex-1 focus:outline-none">
      <slot />
    </main>
    <footer>
      <GlobalFooter />
    </footer>
  </div>
</template>
