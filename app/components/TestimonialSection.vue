<template>
  <section
    :aria-labelledby="headingId"
    class="frame grid gap-12 md:grid-cols-12 md:gap-6"
  >
    <div class="md:col-span-4">
      <div class="md:sticky md:top-10">
        <component
          :is="headingTag"
          :id="headingId"
          class="text-[clamp(2.5rem,1.4rem+4.4vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.04em]"
        >
          {{ title }}
        </component>
        <p class="mt-6 max-w-[34ch] text-lg leading-snug">
          Our customers love our product. Don't just take our word for it, read
          from our extensive list of case studies and customer testimonials.
        </p>
        <a href="#" class="button mt-8">View case studies</a>
      </div>
    </div>

    <ul class="flex flex-col gap-14 md:col-span-7 md:col-start-6 md:pt-3">
      <li v-for="(item, i) in testimonials" :key="item.name" class="reveal">
        <figure>
          <blockquote
            class="quote leading-snug tracking-[-0.015em]"
            :class="
              i === 0
                ? 'text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)]'
                : 'text-[clamp(1.25rem,1.1rem+0.6vw,1.5rem)]'
            "
          >
            <p>{{ item.quote }}</p>
          </blockquote>
          <figcaption class="mt-5 flex items-center gap-4">
            <img
              :src="item.image"
              alt=""
              width="48"
              height="48"
              loading="lazy"
              class="size-12 rounded-full bg-surface object-cover"
            />
            <span>
              <span class="block font-medium">{{ item.name }}</span>
              <span class="block text-[0.9375rem] text-muted">
                {{ item.role }}
              </span>
            </span>
          </figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { testimonials } from "~/data/testimonials";

defineProps({
  title: {
    type: String,
    default: "Testimonials",
  },
  headingTag: {
    type: String,
    default: "h2",
  },
});

const headingId = useId();
</script>

<style scoped>
/* Hang the opening quote mark into the gutter where there is room */
@media (width >= 48rem) {
  .quote p {
    text-indent: -0.42em;
  }
}
.quote p::before {
  content: "\201C";
}
.quote p::after {
  content: "\201D";
}
</style>
