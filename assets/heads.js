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
    description: '株式会社CARVANCL（カーバンクル）は、若手デザイナーを起用したチームで新しい答えを生み出していくデザインプロジェクト推進企業です。上流工程からブランドづくりに関わり、ブランド戦略策定、UX設計、UIデザイン、デザインシステム設計を経てWebアプリケーション・サービスの制作を行います。',
  }),
  '/service': generate({
    title: 'Service',
    description: 'クライアント様のディレクターとしてデザインプロジェクトをリードし、デザイン制作とブランドづくりに関わります。「デザインマネージャー・責任者がいない」という企業様の右腕として、プロジェクトを推進してまいります。',
  }),
  '/u25': generate({
    title: 'For Learner',
    description: '美大・芸大生などのデザイナー学生に実践的な成長機会を提供し、その後のキャリアサポートまでを行います。「卒業後どんな職業が合っているかわからない」「早く世の中で通用するデザイナーに成長したい」という方に向けて、最高の環境を提供します。',
  }),
  '/company': generate({
    title: 'Company',
    description: 'クリエイティブによる地方創生事業や美術・デザイン系の学校での授業も行っております。「心を動かすつくり手が活躍する機会を拡げ続ける」ことを理念に掲げ、世の中で活躍するデザイナーを志す若手に、挑戦と成長の環境を届け続けます。',
  }),
  '/contact': generate({
    title: 'Contact',
    description: 'デザインをビジネス的に推進したい企業様、就活やキャリアに悩むデザイナー学生の方はこちらからご連絡ください',
  }),
  '/works': generate({
    title: 'Works',
    description: 'カーバンクルの実績紹介です！',
  }),
  '/magazine': generate({
    title: 'Magazine',
    description: 'カーバンクルの実績紹介です！',
  }),
  '/event': generate({
    title: 'Event',
    description: 'カーバンクルのイベント紹介です！',
  }),
}
