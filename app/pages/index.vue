<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
})

defineOgImageComponent()
</script>

<template>
  <UPageSection orientation="horizontal">
    <ContentRenderer
      v-if="home"
      :value="home"
    />
  </UPageSection>
</template>
