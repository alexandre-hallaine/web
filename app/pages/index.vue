<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
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
        v-if="home"
        :value="home"
      />
      <div v-else>
        Home not found
      </div>
    </main>
  </div>
</template>
