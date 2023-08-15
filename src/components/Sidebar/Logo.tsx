import { Box, Divider, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import { LogoImage } from '@public/images/sidebar';
import useSidebarStore from '@/stores/useSidebarStore';

const Logo: React.FC = () => {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);
  return (
    <>
      <Flex
        width="full"
        alignItems="center"
        justifyContent="center"
        flexDirection={isCollapsed ? 'row' : 'column'}
      >
        <Box display="flex" alignItems="center" justifyContent={'center'}>
          {isCollapsed ? <Image src={LogoImage} alt="Artefact Logo" /> : null}
        </Box>
      </Flex>
      <Divider marginTop={3} marginBottom={3} borderColor={'whiteAlpha.400'} />
    </>
  );
};

export default Logo;
