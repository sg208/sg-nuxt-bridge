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
      <p class="mt-8 text-sm text-band-muted">
        © {{ year }} {{ $t("footer.rights") }}
      </p>
    </div>
  </section>
</template>

<script setup>
const navigations = useNavigationStore();
const year = new Date().getFullYear();

const socials = [
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "Twitter", icon: "twitter" },
  { name: "GitHub", icon: "github" },
  { name: "Dribbble", icon: "dribbble" },
];
</script>

<style scoped>
.band {
  --focus: #9fc7b8;
}
</style>
