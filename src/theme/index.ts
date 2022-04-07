import { extendTheme } from '@chakra-ui/react';
import colors from 'theme/colors';
import styles from 'theme/styles';
import fonts from 'theme/fonts';

const theme = extendTheme({
  colors,
  fonts,
  styles,
});

export default theme;
