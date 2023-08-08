import { ComponentStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  fontWeight: 'thin',
};

const primaryVariant = {
  bg: '#000000',
  color: '#ffffff',
  _disabled: {
    bg: '#757263',
  },
  _hover: {
    bg: '#757263',
    color: '#ffffff',
    transition: '.3s ease',
    _disabled: {
      _hover: {
        bg: '#757263',
      },
    },
  },
};

const secondaryVariant = {
  bg: '#EEEDEB',
  color: '#606060',
  _hover: {
    bg: '#757263',
    color: '#ffffff',
    transition: '.3s ease',
  },
};

const successVariant = {
  bg: '#000000',
  color: '#ffffff',
  _hover: {
    bg: '#7FBB27',
    color: '#ffffff',
    transition: '.3s ease',
  },
  _active: {
    bg: '#7FBB27',
    color: '#ffffff',
  },
};

const dangerVariant = {
  bg: '#000000',
  color: '#ffffff',
  _hover: {
    bg: '#BF4545',
    color: '#ffffff',
  },
};

const variants = {
  primary: primaryVariant,
  secondary: secondaryVariant,
  success: successVariant,
  danger: dangerVariant,
};

const Button: ComponentStyleConfig = {
  baseStyle,
  variants,
};

export default Button;
