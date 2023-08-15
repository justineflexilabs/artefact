import { Icon, IconProps } from '@chakra-ui/react';

const HamburgerIcon = (props: IconProps) => (
  <Icon viewBox="0 0 29 17" fill="none" boxSize={5} {...props}>
    <path
      d="M1.13699 1H27.0844"
      stroke="#1E1E1E"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M1.13699 8.08984H27.0844"
      stroke="#1E1E1E"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M1.13699 15.1699H21.052"
      stroke="#1E1E1E"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </Icon>
);

export default HamburgerIcon;
