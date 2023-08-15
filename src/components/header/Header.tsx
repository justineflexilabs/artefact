import React from 'react';

import { Box, Button, Text } from '@chakra-ui/react';

import { HamburgerIcon } from '@public/icons/header';
import useSidebarStore from '@/stores/useSidebarStore';

const Header: React.FC = () => {
  const setIsCollapsed = useSidebarStore((state) => state.setIsCollapsed);
  return (
    <Box
      display="flex"
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      width={'full'}
      height={75}
      justifyContent={'flex-start'}
      alignItems={'center'}
    >
      <Button
        leftIcon={<HamburgerIcon width="25" height={'17'} />}
        marginLeft={2}
        onClick={setIsCollapsed}
        variant="ghost"
        _hover={{ backgroundColor: 'transparent' }}
      />
      <Text fontFamily="Gilroy-Regular" fontSize="18">
        Welcome back, Kaz!
      </Text>
    </Box>
  );
};

export default Header;
