import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

// Foundations
import { Button, Checkbox } from './components';
import { colors } from './foundations';

// Chakra Configuration on Initial Mode
const config: ThemeConfig = {};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button,
    Checkbox,
  },
  styles: {
    global: {
      '@font-face': [
        {
          fontFamily: 'Gilroy-Bold',
          src: `url("/fonts/Gilroy-Bold.woff") format("woff")`,
        },
        {
          fontFamily: 'Gilroy-Medium',
          src: `url("/fonts/Gilroy-Medium.woff") format("woff")`,
        },
        {
          fontFamily: 'Gilroy-Light',
          src: `url("/fonts/Gilroy-Light.woff") format("woff")`,
        },
        {
          fontFamily: 'Gilroy-Regular',
          src: `url("/fonts/Gilroy-Regular.woff") format("woff")`,
        },
      ],
      '.chakra-input, .chakra-input::before, .chakra-input::after': {
        borderColor: 'gray.500!important',
      },
    },
  },
});
export default theme;
