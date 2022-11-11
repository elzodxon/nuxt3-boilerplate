// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/styles/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/eslint-module',
      {
        threads: true,
      },
    ],
    '@nuxtjs/stylelint-module',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      baseURL: "localhost",
    },
  },
  router: {
    scrollBehavior: () => ({ x: 0, y: 0, behavior: 'smooth' }),
  },
})
