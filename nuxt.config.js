export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lu Estilo',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Teste de codificação - A Lu Estilo é uma empresa de confecção que vem buscando novas oportunidades\n' +
          'de negócio, porém o time comercial não possui nenhuma ferramenta que facilite\n' +
          'novos canais de vendas. ' },
      { name: 'format-detection', content: 'telephone=no' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/accessor',
    '@/plugins/notifications.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix:false }],
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    // '@nuxtjs/auth-next'
  ],
  axios: {
    baseUrl: 'http://localhost/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
