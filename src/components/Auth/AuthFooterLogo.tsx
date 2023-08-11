import React from 'react';

import { Box } from '@chakra-ui/react';
import Image from 'next/image';

import { FooterLogo } from '@public/images/auth';

const AuthFooterLogo: React.FC = () => {
  return (
    <Box position={'absolute'} right={10} bottom={10}>
      <Image src={FooterLogo} alt="Footer logo" width={100} height={100} />
    </Box>
  );
};

export default AuthFooterLogo;
