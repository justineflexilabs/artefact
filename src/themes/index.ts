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
          src: `url("/fonts/Gilroy-Bold.ttf") format("truetype")`,
        },
        {
          fontFamily: 'Gilroy-Medium',
          src: `url("/fonts/Gilroy-Medium.ttf") format("truetype")`,
        },
        {
          fontFamily: 'Gilroy-Light',
          src: `url("/fonts/Gilroy-Light.ttf") format("truetype")`,
        },
        {
          fontFamily: 'Gilroy-Regular',
          src: `url("/fonts/Gilroy-Regular.ttf") format("truetype")`,
        },
      ],
      '.chakra-input, .chakra-input::before, .chakra-input::after': {
        borderColor: 'gray.500!important',
      },
    },
  },
});
export default theme;
