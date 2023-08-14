import React from 'react';

import {
  Box,
  Flex,
  Link as LinkChakra,
  ListIcon,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import useSidebarStore from '@/stores/useSidebarStore';

interface Props {
  item: {
    label: string;
    icon: React.ComponentType;
    path: string;
  };
  isActive: boolean;
  isCollapsed: boolean;
  index: number;
}

const NavigationItem: React.FC<Props> = ({
  item,
  isActive,
  isCollapsed,
  index,
}: Props) => {
  const setActiveIndex = useSidebarStore((state) => state.setActiveIndex);

  const { label, path } = item;
  const { icon } = item;
  return (
    <Box
      display="flex"
      alignItems="center"
      my={isCollapsed ? 3 : 8}
      justifyContent="center"
      onClick={() => setActiveIndex(index)}
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
            bg={isActive ? 'secondary.500' : '#282828'}
            borderRadius={'md'}
          >
            <ListIcon as={icon} />
            <Text ml={5}>{label}</Text>
          </Flex>
        ) : (
          <ListIcon ml={5} as={icon} fontSize={22} />
        )}
      </LinkChakra>
    </Box>
  );
};

export default NavigationItem;
