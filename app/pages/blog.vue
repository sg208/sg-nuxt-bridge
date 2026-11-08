<template>
  <section>
    <PageIntro :title="$t('navigation.Blog')" />

    <article class="frame grid gap-8 md:grid-cols-12 md:items-end md:gap-6">
      <a href="#" class="block md:col-span-7" tabindex="-1" aria-hidden="true">
        <img
          :src="featuredPost.image"
          alt=""
          width="1800"
          height="2707"
          class="aspect-[4/3] w-full bg-surface object-cover"
        />
      </a>
      <div class="md:col-span-5">
        <p class="text-[0.9375rem] text-accent">
          {{ $t("page_Blog.featured") }}
        </p>
        <h2
          class="mt-3 text-[clamp(2rem,1.3rem+2.6vw,3.5rem)] leading-[1] font-semibold tracking-[-0.035em]"
        >
          <a href="#" class="hover:text-accent">{{ featuredPost.title }}</a>
        </h2>
        <PostMeta :post="featuredPost" class="mt-5" />
      </div>
    </article>

    <ul
      class="frame mt-24 grid gap-x-6 gap-y-16 sm:grid-cols-2 md:mt-32 lg:grid-cols-3"
    >
      <li v-for="post in posts" :key="post.title" class="reveal">
        <article class="flex flex-col">
          <h2
            class="order-3 mt-2 text-[1.5rem] leading-tight font-semibold tracking-[-0.02em]"
          >
            <a href="#" class="hover:text-accent">{{ post.title }}</a>
          </h2>
          <img
            :src="post.image"
            alt=""
            width="600"
            height="400"
            loading="lazy"
            class="order-1 aspect-[3/2] w-full bg-surface object-cover"
          />
          <p class="order-2 mt-5 text-[0.9375rem] text-accent">
            {{ post.category }}
          </p>
          <p class="order-4 mt-3">{{ post.excerpt }}</p>
          <PostMeta :post="post" class="order-5 mt-4" />
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { featuredPost, posts } from "~/data/posts";

const { t } = useI18n();

useHead({ title: computed(() => t("navigation.Blog")) });
</script>
