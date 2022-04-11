import fonts from 'theme/fonts';

const styles = {
  global: {
    'html, body, #__next': {
      height: '100%',
      fontFamily: fonts.default,
      boxSizing: 'border-box',
    },
    body: {
      color: 'body',
    },
    '.imageContainer > div': {
      position: 'static !important',
      width: '100% !important',
      height: '100% !important',
    },
    '.imageContainer img': {
      position: 'static !important',
      width: '100% !important',
      height: 'auto !important',
    },
  },
};
export default styles;
