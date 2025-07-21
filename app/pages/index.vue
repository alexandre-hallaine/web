<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
})

defineOgImageComponent('Main')
</script>

<template>
  <UPageSection orientation="horizontal">
    <ContentRenderer v-if="home" :value="home" />
    <img src="https://random-d.uk/api/v2/randomimg" alt="Duck" class="rounded">
  </UPageSection>
</template>
