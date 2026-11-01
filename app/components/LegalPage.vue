<template>
  <article>
    <PageIntro :title="title" :lead="$t(`${page}.lead`)">
      <p class="text-[0.9375rem] text-muted md:col-span-12">
        {{ $t("page_Legal.updated") }}
      </p>
    </PageIntro>
    <div class="frame grid gap-14 md:gap-20">
      <section
        v-for="(section, index) in sections"
        :key="section.heading"
        :aria-labelledby="`${page}-section-${index}`"
        class="grid gap-4 md:grid-cols-12 md:gap-6"
      >
        <h2
          :id="`${page}-section-${index}`"
          class="text-[1.75rem] leading-tight font-semibold tracking-[-0.03em] md:col-span-4"
        >
          {{ section.heading }}
        </h2>
        <div
          class="grid max-w-[62ch] gap-4 text-lg leading-relaxed md:col-span-8"
        >
          <p v-for="text in section.body" :key="text">{{ text }}</p>
          <ul v-if="section.items.length" class="grid list-disc gap-2 pl-5">
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
          <p v-if="section.link">
            <NuxtLink :to="section.link.to" class="text-link">
              {{ section.link.label }}
            </NuxtLink>
          </p>
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  // i18n key of the page, e.g. "page_Privacy"
  page: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const { tm, rt } = useI18n();

const renderList = (list) => (list ?? []).map((entry) => rt(entry));

// Messages hold sections as { heading, body?, items?, link? }; rt() turns each into a string
const sections = computed(() =>
  tm(`${props.page}.sections`).map((section) => ({
    heading: rt(section.heading),
    body: renderList(section.body),
    items: renderList(section.items),
    link: section.link
      ? { to: rt(section.link.to), label: rt(section.link.label) }
      : null,
  })),
);
</script>
