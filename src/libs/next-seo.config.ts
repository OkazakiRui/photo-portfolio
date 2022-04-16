export default {
  titleTemplate: '%s | RuiOkazaki Photograph Portfolio',
  description:
    '岡崎流依の写真ポートフォリオです。今までに撮った写真を投稿していきます。',
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
  twitter: {
    handle: '@yoruhanemutaiyo',
    site: '@yoruhanemutaiyo',
    cardType: 'summary_large_image',
  },
};

export const openGraph = {
  url: 'https://photograph-portfolio-gamma.vercel.app/',
  type: 'website',
  locale: 'ja_JP',
  site_name: 'RuiOkazaki-PhotographPortfolio',
  images: [
    {
      url: 'https://images.microcms-assets.io/assets/56bf892c4013491bbe6df89d749cdb05/0a85889cb9a04407ba09c68f35347331/myself.jpg',
      width: 960,
      height: 960,
      alt: '岡崎流依の写真',
      type: 'image/jpeg',
    },
  ],
};
