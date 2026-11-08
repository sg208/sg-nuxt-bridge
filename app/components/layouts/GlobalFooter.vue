<template>
  <section
    class="band mt-32 overflow-hidden bg-band pt-16 pb-8 text-band-ink md:mt-48 md:pt-20"
  >
    <div class="frame">
      <div class="grid gap-12 sm:grid-cols-2 md:grid-cols-12">
        <p class="max-w-[28ch] text-xl leading-snug md:col-span-5">
          {{ $t("page_Index.Hero-subheading") }}
        </p>
        <nav :aria-label="$t('a11y.footer-nav')" class="md:col-span-3">
          <h2 class="text-[0.9375rem] text-band-muted">
            {{ $t("footer.pages") }}
          </h2>
          <ul class="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-1">
            <li v-for="nav in navigations.footer" :key="nav.name">
              <NuxtLink :to="nav.path" class="text-link inline-block py-1">
                {{ $t(`navigation.${nav.name}`) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="md:col-span-3 md:col-start-10">
          <h2 class="text-[0.9375rem] text-band-muted">
            {{ $t("footer.follow") }}
          </h2>
          <ul
            :aria-label="$t('a11y.social')"
            class="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-1"
          >
            <li v-for="item in socials" :key="item.name">
              <a href="#" class="text-link inline-flex items-center gap-3 py-1">
                <SocialIcon :name="item.icon" class="size-4 shrink-0" />
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p
        aria-hidden="true"
        class="mt-24 text-[clamp(4rem,25vw,24rem)] leading-[0.8] font-semibold tracking-[-0.05em] select-none md:mt-32"
      >
        brands<span class="text-band-muted">.</span>
      </p>
      <div
        class="mt-8 flex flex-col gap-4 text-sm text-band-muted md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ year }} {{ $t("footer.rights") }}</p>
        <nav :aria-label="$t('a11y.legal-nav')">
          <ul class="flex flex-wrap gap-x-6 gap-y-1">
            <li v-for="nav in navigations.legal" :key="nav.name">
              <NuxtLink :to="nav.path" class="text-link inline-block py-2">
                {{ $t(`navigation.${nav.name}`) }}
              </NuxtLink>
            </li>
            <li>
              <a
                :href="repoUrl"
                :aria-label="$t('footer.source')"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex size-8 items-center justify-center transition-colors hover:text-band-ink"
              >
                <SocialIcon name="github" class="size-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup>
const navigations = useNavigationStore();
const year = new Date().getFullYear();
const repoUrl = "https://github.com/sg208/sg-nuxt-bridge";

const socials = [
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "Twitter", icon: "twitter" },
  { name: "Dribbble", icon: "dribbble" },
];
</script>

<style scoped>
.band {
  --focus: var(--band-accent);
}
</style>
