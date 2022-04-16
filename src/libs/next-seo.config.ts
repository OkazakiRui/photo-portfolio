export default {
  titleTemplate: '%s | RuiOkazaki Photograph Portfolio',
  description:
    '岡崎流依の写真ポートフォリオです。今までに撮った写真が表示されます。',
  defaultTitle: 'RuiOkazaki Photograph Portfolio',
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'Rui Okazaki',
    },
    {
      name: 'application-name',
      content: 'RuiOkazaki-PhotographPortfolio',
    },
  ],
  openGraph: {
    url: 'https://photograph-portfolio-gamma.vercel.app/',
    type: 'website',
    locale: 'ja_JP',
    site_name: 'RuiOkazaki-PhotographPortfolio',
  },
  twitter: {
    handle: '@yoruhanemutaiyo',
    site: '@yoruhanemutaiyo',
    cardType: 'summary_large_image',
  },
};
