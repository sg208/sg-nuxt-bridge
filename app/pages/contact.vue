<template>
  <section>
    <PageIntro
      :title="$t('navigation.Contact')"
      :lead="$t('page_Contact.lead')"
    />
    <div class="frame">
      <h2 class="text-[1.75rem] leading-tight font-semibold tracking-[-0.03em]">
        {{ $t("page_Contact.languages") }}
      </h2>
      <ul class="mt-6 flex flex-wrap gap-3">
        <li v-for="item in locales" :key="item.code">
          <span
            v-if="item.code === locale"
            aria-current="true"
            class="inline-flex min-h-11 items-center gap-3 bg-surface px-5 py-3"
          >
            {{ item.name }}
            <span class="text-[0.9375rem] text-muted">
              {{ $t("page_Contact.current") }}
            </span>
          </span>
          <NuxtLink
            v-else
            :to="switchLocalePath(item.code)"
            :lang="item.language"
            class="button"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>
