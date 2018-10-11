const base = ' | 株式会社カーバンクル CARVANCL つくり手が活躍する機会を拡げ続けるために。'
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
    description: '株式会社カーバンクルです！',
  }),
  '/service': generate({
    title: 'Service',
    description: 'カーバンクルのSERVICEです！',
  }),
  '/u25': generate({
    title: 'For Learners',
    description: '日々、学ぶものたちへ贈る熱い想い！！',
  }),
  '/works': generate({
    title: 'Works',
    description: 'カーバンクルの実績です！',
  }),
  '/company': generate({
    title: 'Company',
    description: '日々、学ぶものたちへ贈る熱い想い！！',
  }),
  '/event': generate({
    title: 'Event',
    description: 'カーバンクルの実績です！',
  }),
  '/contact': generate({
    title: 'Contact',
    description: 'カーバンクルの実績です！',
  }),
}
