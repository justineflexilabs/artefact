import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { Metadata } from 'next';

import { FooterImage } from '@public/images/sidebar';

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
        <Box
          width="full"
          display={'flex'}
          justifyContent={'flex-start'}
          padding={5}
          marginTop={10}
        >
          <Image src={FooterImage} alt="Footer logo" />
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
