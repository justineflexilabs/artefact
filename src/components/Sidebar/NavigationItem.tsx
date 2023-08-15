import React from 'react';

import {
  Box,
  Flex,
  Link as LinkChakra,
  ListIcon,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  item: {
    label: string;
    icon: React.ComponentType;
    path: string;
  };
  isActive: boolean;
  isCollapsed: boolean;
}

const NavigationItem: React.FC<Props> = ({
  item,
  isActive,
  isCollapsed,
}: Props) => {
  const { label, path } = item;
  const { icon } = item;
  return (
    <Box
      display="flex"
      alignItems="center"
      my={isCollapsed ? 2 : 8}
      justifyContent="center"
      textStyle={'sidebarLink'}
    >
      <LinkChakra
        href={path}
        as={Link}
        display="flex"
        alignItems="center"
        _hover={{ textDecoration: 'none' }}
        width="full"
        justifyContent={'center'}
      >
        {isCollapsed ? (
          <Flex
            alignContent={'center'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            width={'85%'}
            padding={3}
            paddingLeft={5}
            bg={isActive ? 'secondary.500' : 'primary.600'}
            borderRadius={'md'}
          >
            <ListIcon as={icon} />
            <Text marginLeft={5}>{label}</Text>
          </Flex>
        ) : (
          <ListIcon marginLeft={5} as={icon} fontSize={22} />
        )}
      </LinkChakra>
    </Box>
  );
};

export default NavigationItem;
