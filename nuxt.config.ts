// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxtjs/seo',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  content: {
    experimental: { nativeSqlite: true },
  },
  compatibilityDate: '2025-07-15',
  nitro: { cloudflare: { deployConfig: true } },
  eslint: {
    checker: true,
    config: { stylistic: true },
  },
  seo: { automaticDefaults: false },
})
