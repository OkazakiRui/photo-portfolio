import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript, theme } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Noto+Serif:ital@1&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
