import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Foundations
import { Button } from './components';
import { colors } from './foundations';

// Chakra Configuration on Initial Mode
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button,
  },
});
export default theme;
