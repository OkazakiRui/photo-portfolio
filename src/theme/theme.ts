import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    body: '#666666',
    white: '#ffffff',
    accent: '#cccccc',
  },
  styles: {
    global: {
      'html, body, #__next': {
        height: '100%',
      },
      body: {
        color: 'body',
      },
    },
  },
});

export default theme;
