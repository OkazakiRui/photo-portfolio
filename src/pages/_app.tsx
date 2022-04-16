/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import { DefaultSeo } from 'next-seo';
import seoConfig from 'libs/next-seo.config';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <DefaultSeo {...seoConfig} />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
