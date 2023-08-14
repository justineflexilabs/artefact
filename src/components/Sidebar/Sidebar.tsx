import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

import AvatarBox from './AvatarBox';
import Logo from './Logo';
import Navigation from './Navigation';

export const metadata: Metadata = {
  title: 'Sidebar',
  description: 'Sidebar desc',
};

const Sidebar: React.FC = () => {
  return (
    <>
      <Box width="full">
        <Logo />
        <Navigation />
        <AvatarBox />
      </Box>
    </>
  );
};

export default Sidebar;
