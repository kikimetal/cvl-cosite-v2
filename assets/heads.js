const base = ' | 株式会社カーバンクル CARVANCL'
const common = {
  meta: [
    // { name: 'fb:admins', content: 'admin id' },
    // { name: 'og:type', content: 'website' },
    // { name: 'og:url', content: 'url' },
    // { name: 'og:title', content: 'og page title' },
    // { name: 'og:site_name', content: 'og site name' },
    // { name: 'og:description', content: 'og description' },
    // { name: 'og:image', content: 'og image' },
  ],
  link: [
  ],
}

// NUXT に渡すためのフォーマッター
const generate = data => ({
  title: data.title + base,
  meta: [
    { hid: 'description', name: 'description', content: data.description },
    ...common.meta,
  ],
  link: [...common.link],
})

export default {
  '/': generate({
    title: 'Home',
    description: 'カーバンクルのHOMEです！',
  }),
  '/service': generate({
    title: 'Service',
    description: 'カーバンクルのSERVICEです！',
  }),
}
