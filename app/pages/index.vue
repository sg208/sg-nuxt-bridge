<template>
  <div>
    <section
      aria-labelledby="hero-heading"
      class="frame flex flex-col gap-20 pt-[8vh] pb-12 md:gap-32 md:pb-16 lg:gap-40"
    >
      <h1
        id="hero-heading"
        class="rise max-w-[19ch] text-[clamp(2.625rem,0.6rem+9.4vw,10rem)] leading-[0.92] font-semibold tracking-[-0.045em]"
      >
        {{ $t("page_Index.Hero-heading") }}
      </h1>
      <div class="grid gap-8 md:grid-cols-12 md:items-end md:gap-6">
        <p
          class="rise max-w-[40ch] text-[clamp(1.1875rem,1.05rem+0.5vw,1.5rem)] leading-snug md:col-span-6"
          style="--delay: 140ms"
        >
          {{ $t("page_Index.Hero-subheading") }}
        </p>
        <div
          class="rise flex flex-wrap items-center gap-x-6 gap-y-4 md:col-span-6 md:justify-self-end"
          style="--delay: 220ms"
        >
          <NuxtLink to="/pricing" class="button">
            {{ $t("page_Index.purchase") }}
            <span class="font-normal opacity-75">
              · {{ $t("page_Index.price-note") }}
            </span>
          </NuxtLink>
          <NuxtLink to="/features" class="text-link py-2">
            {{ $t("page_Index.learn-more") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section aria-labelledby="features-heading" class="mt-16 md:mt-24">
      <div class="frame grid gap-4 pb-10 md:grid-cols-12 md:gap-6 md:pb-14">
        <h2
          id="features-heading"
          class="reveal text-[clamp(2.5rem,1.4rem+4.4vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.04em] md:col-span-6"
        >
          {{ $t("page_Index.features-heading") }}
        </h2>
        <p class="reveal max-w-[34ch] text-lg md:col-span-4 md:col-start-9">
          {{ $t("page_Index.features-lead") }}
        </p>
      </div>
      <FeatureList />
    </section>

    <div class="mt-32 md:mt-48">
      <TestimonialSection :title="$t('testimonials.title')" />
    </div>

    <section aria-labelledby="offer-heading" class="frame mt-32 md:mt-48">
      <div class="reveal bg-surface px-5 py-14 sm:px-10 md:px-14 md:py-20">
        <h2
          id="offer-heading"
          class="max-w-[16ch] text-[clamp(2.25rem,1.2rem+4vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.04em]"
        >
          {{ $t("page_Index.offer-heading-start") }}
          <span class="bg-accent px-[0.15em] text-accent-ink">
            {{ $t("page_Index.offer-price") }}
          </span>
          {{ $t("page_Index.offer-heading-end") }}
        </h2>
        <div
          class="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p class="max-w-[40ch] text-lg">
            {{ $t("page_Index.offer-lead") }}
          </p>
          <NuxtLink to="/pricing" class="button self-start md:self-auto">
            {{ $t("navigation.Pricing") }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOptions({ name: "IndexPage" });
</script>
