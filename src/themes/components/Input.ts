import { ComponentStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  fontWeight: 'thin',
};

const formVariant = {
  bg: '#000000',
  color: '#ffffff',
  _disabled: {
    bg: '#757263',
  },
};

const variants = {
  form: formVariant,
};

const Input: ComponentStyleConfig = {
  baseStyle,
  variants,
};

export default Input;
