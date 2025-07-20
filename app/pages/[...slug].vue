<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    message: 'The requested page does not exist.',
  })
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})

useHead({
  htmlAttrs: { class: 'dark:bg-black', lang: 'en' },
})

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('background.jpg', { format: 'webm' })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center"
    :style="backgroundStyles"
  >
    <main class="prose dark:prose-invert md:prose-lg lg:prose-xl m-5 rounded-xl bg-white/50 p-5 shadow-lg backdrop-blur-md dark:bg-black/50">
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </main>
  </div>
</template>
