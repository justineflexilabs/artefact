import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

// Foundations
import { Button, Checkbox, FormLabel } from './components';
import { colors } from './foundations';

// Chakra Configuration on Initial Mode
const config: ThemeConfig = {};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button,
    Checkbox,
    FormLabel,
  },
  styles: {
    global: {
      '.chakra-input, .chakra-input::before, .chakra-input::after': {
        borderColor: 'gray.500!important',
      },
    },
  },
  textStyles: {
    forgotPassword: {
      fontSize: ['12px', '12px', '16px', '16px'],
      fontFamily: 'Gilroy-Light',
    },
    buttonText: {
      fontSize: ['md', 'lg', 'xl', '2xl'],
      fontFamily: 'Gilroy-Light',
    },
  },
});
export default theme;
