module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',

  head: {
    title: 'cvl-cosite-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'こんにちは。カーバンクルです。。。' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/ozu0idc.css' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    * Nuxt ^2.0.0 build error 回避のため
    * https://qiita.com/m1ul24/items/efd2b9af1954cce6bcc7
    */
    // extend (config, { isDev, isClient }) {
    extend (config) {
      // if (isDev && isClient) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },

  plugins: [{ src: '~/plugins/routerOption.js', ssr: false }],

  css: [
    'assets/css/myreset.scss',
    'assets/css/animate.css',
  ],
}
