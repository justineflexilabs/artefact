// components/Button.ts
import { ComponentStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  control: {
    borderColor: 'gray.500',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    border: '1px solid',
    _checked: {
      borderColor: 'black',

      bg: 'white',
      color: 'black',
      _before: {
        content: '""',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        backgroundImage: `url("data:image/svg+xml,utf8,<svg viewBox='0 0 24 24' fill='black' xmlns='http://www.w3.org/2000/svg'><path d='M20 6L9 17L4 12'></path></svg>")`,
        backgroundSize: '50% 50%',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        border: '1px solid',
      },
    },
    _hover: {
      bg: 'white!important',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
};

const Checkbox: ComponentStyleConfig = {
  baseStyle,
};

export default Checkbox;
