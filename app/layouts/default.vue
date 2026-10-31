<template>
  <div class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">
      <header>
        <GlobalHeader />
      </header>
      <main>
        <slot />
      </main>
      <footer>
        <GlobalFooter />
      </footer>
    </div>
  </div>
</template>
