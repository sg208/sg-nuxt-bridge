<template>
  <p class="text-[0.9375rem] text-muted">
    {{ $t("page_Blog.by") }}
    <a href="#" class="text-link text-ink">{{ post.author }}</a>
    <span aria-hidden="true"> · </span>
    <time :datetime="post.date">{{ formattedDate }}</time>
    <span aria-hidden="true"> · </span>
    {{ $t("page_Blog.read-time", { minutes: post.minutes }) }}
  </p>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const { locale } = useI18n();

const formattedDate = computed(() =>
  new Intl.DateTimeFormat(locale.value, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${props.post.date}T00:00:00`)),
);
</script>
