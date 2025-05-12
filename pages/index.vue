<script setup lang="ts">
const {data: home} = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <div
      class="flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center"
      style="background-image: url(/background.webp)"
  >
    <ContentRenderer
        v-if="home" :value="home" class="prose dark:prose-invert md:prose-lg lg:prose-xl m-5 rounded-xl bg-white/50 p-5 shadow-lg backdrop-blur-md dark:bg-black/50"/>
    <div v-else>Home not found</div>
  </div>
</template>
