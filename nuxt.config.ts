// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  ssr: false,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    database: {
      type: 'sqlite',
      filename: ':memory:'
    },
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  experimental: {
    payloadExtraction: false
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    preset: 'static'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify',
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons/custom'
      }
    ]
  },

  image: {
    provider: 'none'
  }
})
