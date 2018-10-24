module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',

  head: {
    title: '株式会社CARVANCL カーバンクル',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '株式会社CARVANCL（カーバンクル）は、若手デザイナーを起用したチームで新しい答えを生み出していくデザインプロジェクト推進企業です。上流工程からブランドづくりに関わり、ブランド戦略策定、UX設計、UIデザイン、デザインシステム設計を経てWebアプリケーション・サービスの制作を行います。' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],
    link: [
      { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      // { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'apple-touch-startup-image', href: '/apple-touch-icon.png' },
      // { rel: 'stylesheet', href: 'https://use.typekit.net/ozu0idc.css' },
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

  plugins: [
    { src: '~/plugins/routerOption.js', ssr: false },
    { src: '~/plugins/vue-parallax-js.js', ssr: false },
  ],

  css: [
    'assets/css/myreset.scss',
    'assets/css/animate.css',
    'assets/css/common.scss',
  ],
}
