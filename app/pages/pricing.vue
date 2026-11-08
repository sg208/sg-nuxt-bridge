<template>
  <section>
    <PageIntro
      :title="$t('page_Pricing.title')"
      :lead="$t('page_Pricing.lead')"
    />
    <ul class="frame grid gap-4 lg:grid-cols-3 lg:gap-5">
      <li
        v-for="plan in plans"
        :key="plan.name"
        class="reveal flex flex-col px-6 py-10 sm:px-10"
        :class="
          plan.isFeatured ? 'band bg-band text-band-ink' : 'bg-surface text-ink'
        "
      >
        <p
          v-if="plan.isFeatured"
          class="mb-3 text-sm font-semibold tracking-[0.08em] text-band-muted uppercase"
        >
          {{ t("page_Pricing.popular") }}
        </p>
        <h2
          class="text-[1.75rem] leading-tight font-semibold tracking-[-0.03em]"
        >
          {{ plan.name }}
        </h2>
        <p class="mt-8 flex items-baseline gap-2">
          <span
            class="text-[clamp(3.5rem,2.8rem+2.4vw,5rem)] leading-none font-semibold tracking-[-0.05em] tabular-nums"
          >
            ${{ plan.price }}
          </span>
          <span :class="plan.isFeatured ? 'text-band-muted' : 'text-muted'">
            {{ t("page_Pricing.per-month") }}
          </span>
        </p>
        <p class="mt-6 max-w-[30ch]">{{ plan.summary }}</p>
        <ul class="mt-8 mb-10 flex flex-col gap-3">
          <li
            v-for="perk in plan.perks"
            :key="perk"
            class="flex items-start gap-3"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              class="mt-[0.2em] size-4 shrink-0"
              :class="plan.isFeatured ? 'text-band-muted' : 'text-accent'"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M4 10.5l4 4 8-9" />
            </svg>
            {{ perk }}
          </li>
        </ul>
        <button
          type="button"
          class="button mt-auto w-full"
          :class="{ 'button-inverse': plan.isFeatured }"
        >
          {{ t("page_Pricing.select")
          }}<span class="sr-only">: {{ plan.name }}</span>
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { plans } from "~/data/plans";

const { t } = useI18n();

useHead({ title: computed(() => t("navigation.Pricing")) });
</script>

<style scoped>
.band {
  --focus: var(--band-accent);
}
.button-inverse {
  background-color: var(--band-accent);
  color: var(--band-accent-ink);
}
.button-inverse:hover {
  background-color: var(--band-ink);
  color: var(--band);
}
</style>
