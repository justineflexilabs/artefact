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
      '.chakra-input, .chakra-input::before, .chakra-input::after': {
        borderColor: 'gray.500!important',
      },
    },
  },
});
export default theme;
