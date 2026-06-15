<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('landing' as never).path(route.path).first())

const title = (page.value as { seo?: { title?: string }, title?: string })?.seo?.title || (page.value as { title?: string })?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const heroLinks = computed(() => {
  const p = page.value as { links?: Array<{ [key: string]: unknown }> } | null
  return (p?.links || []).map(link => ({
    ...link,
    size: 'lg' as const
  }))
})

const pageImage = computed(() => {
  const p = page.value as { image?: string | { light: string, dark: string } } | null
  return p?.image
})

const pageQuickLinks = computed(() => {
  const p = page.value as {
    quickLinks?: Array<{ title: string, description: string, to: string, icon?: string }>
  } | null
  return p?.quickLinks || []
})

const pageFeatures = computed(() => {
  const p = page.value as { features?: Array<{ title: string, description: string, icon?: string }> } | null
  return p?.features || []
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="heroLinks"
      headline="产品介绍"
      orientation="horizontal"
      class="dark:bg-neutral-950"
    >
      <UColorModeImage
        v-if="pageImage && typeof pageImage === 'object'"
        :light="(pageImage as { light: string }).light"
        :dark="(pageImage as { dark: string }).dark"
        :alt="page.title"
        class="rounded-lg shadow-lg shadow-default ring-2 ring-default w-full mx-auto"
      />
      <img
        v-else-if="pageImage"
        :src="pageImage as string"
        :alt="page.title"
      >
      <div
        v-else
        class="w-full max-w-md mx-auto aspect-video rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
      >
        <UIcon
          name="i-lucide-image"
          class="w-16 h-16 text-gray-400"
        />
      </div>
      <template #top>
        <HeroBackground class="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[200%] h-[200%] -z-10 opacity-50 pointer-events-none" />
      </template>
    </UPageHero>

    <UPageSection
      v-if="pageFeatures.length"
      title="核心功能"
      class="dark:bg-neutral-950"
      :ui="{ container: '!pt-0 pb-8 sm:pb-12 lg:pb-16' }"
    >
      <UPageGrid>
        <UPageCard
          v-for="(feature, index) in pageFeatures"
          :key="index"
          v-bind="feature"
          spotlight
          spotlight-color="primary"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      v-if="pageQuickLinks.length"
      title="文档导航"
      class="dark:bg-neutral-950"
      :ui="{ container: 'py-8 sm:py-12 lg:py-16' }"
    >
      <UPageGrid class="grid-cols-2 gap-4">
        <UPageCard
          v-for="(link, index) in pageQuickLinks"
          :key="index"
          v-bind="link"
          spotlight
          spotlight-color="primary"
        />
      </UPageGrid>
    </UPageSection>
  </UPage>
</template>
