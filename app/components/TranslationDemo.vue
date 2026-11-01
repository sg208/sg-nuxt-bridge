<template>
  <section>
    <PageIntro :title="title" :lead="$t('page_Demo.lead')" />
    <dl class="frame grid gap-2">
      <div
        v-for="row in rows"
        :key="`${row.label}-${row.value}`"
        class="grid gap-1 px-4 py-5 odd:bg-surface sm:px-6 md:grid-cols-12 md:gap-6"
      >
        <dt class="text-[0.9375rem] text-muted md:col-span-3">
          {{ row.label }}
        </dt>
        <dd class="text-xl leading-snug md:col-span-9">{{ row.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
});
</script>
