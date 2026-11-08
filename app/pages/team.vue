<template>
  <section>
    <PageIntro :title="$t('page_Team.title')" :lead="$t('page_Team.sample')" />
    <ul
      class="frame grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4"
    >
      <li v-for="person in team" :key="person.name" class="reveal">
        <span
          aria-hidden="true"
          class="flex aspect-square w-full items-center justify-center bg-surface text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] font-semibold tracking-[-0.04em] text-muted"
        >
          {{ person.initials }}
        </span>
        <h2 class="mt-4 text-lg leading-tight font-semibold tracking-[-0.01em]">
          {{ person.name }}
        </h2>
        <p class="mt-1 text-[0.9375rem] text-muted">{{ person.role }}</p>
        <ul class="mt-2 -ml-2.5 flex">
          <li v-for="network in networks" :key="network.icon">
            <a
              href="#"
              class="inline-flex size-11 items-center justify-center text-muted transition-colors hover:text-ink"
            >
              <SocialIcon :name="network.icon" class="size-[1.125rem]" />
              <span class="sr-only">
                {{
                  $t("page_Team.on-network", {
                    name: person.name,
                    network: network.name,
                  })
                }}
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { team } from "~/data/team";

const { t } = useI18n();

useHead({ title: computed(() => t("navigation.Team")) });

const networks = [
  { name: "Twitter", icon: "twitter" },
  { name: "GitHub", icon: "github" },
];
</script>
