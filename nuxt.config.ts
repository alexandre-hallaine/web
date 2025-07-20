// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/content'],
  devtools: { enabled: true },
  content: {
    experimental: { nativeSqlite: true },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    checker: true,
    config: { stylistic: true },
  },
})
