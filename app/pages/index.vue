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
    <template #body>
      <ContentRenderer
        v-if="home"
        :value="home"
      />
    </template>
    <img
      src="https://avatars.githubusercontent.com/u/52411215"
      class="rounded"
      alt="My GitHub Avatar"
    >
  </UPageSection>
</template>
