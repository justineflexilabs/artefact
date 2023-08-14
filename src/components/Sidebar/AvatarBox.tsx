import { Avatar, Box, Flex, Link as LinkChakra, Text } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';

import { LogoutIcon, SettingsIcon } from '@public/icons/sidebar';
import { removeToken } from '@/lib/http';
import useSidebarStore from '@/stores/useSidebarStore';

const AvatarBox: React.FC = () => {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);

  const handleLogout = async () => {
    await signOut({
      callbackUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/sign-in`,
      redirect: true,
    });

    removeToken();
  };

  return (
    <>
      <Flex
        borderColor="gray.100"
        borderRadius="full"
        width="full"
        p={5}
        pt={0}
        alignItems="center"
        justifyContent="center"
        flexDirection={isCollapsed ? 'row' : 'column-reverse'}
      >
        {isCollapsed ? (
          <>
            <Avatar
              name="Design To Chakra UI"
              bg="teal.300"
              size={'md'}
              mr={2}
            />
            <Flex
              width="full"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Text
                fontSize={14}
                fontFamily="Gilroy-Light"
                color="white"
                lineHeight={0}
              >
                Kaz Uy
              </Text>
              <Text
                as="small"
                color="white"
                fontFamily="Gilroy-Light"
                fontSize={10}
                lineHeight={0}
                mt={2}
              >
                City of Balbarat
              </Text>
            </Flex>
            <LinkChakra href="/user-profile">
              <SettingsIcon fontSize={30} />
            </LinkChakra>
          </>
        ) : (
          <>
            <LinkChakra href="/user-profile" mt={5}>
              <SettingsIcon />
            </LinkChakra>
            <Avatar name="Design To Chakra UI" bg="teal.300" size={'md'} />
          </>
        )}
      </Flex>
      <Box
        display="flex"
        alignItems="center"
        my={isCollapsed ? 3 : 0}
        justifyContent="center"
        textStyle={'sidebarLink'}
      >
        <LinkChakra
          display="flex"
          alignItems="center"
          _hover={{ textDecoration: 'none' }}
          width="full"
          justifyContent={'center'}
          onClick={() => handleLogout()}
        >
          {isCollapsed ? (
            <Flex
              alignContent={'center'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              width={'85%'}
              padding={2}
              bg={'#282828'}
              borderRadius={'md'}
            >
              <LogoutIcon fontSize={30} ml={2} />
              <Text ml={5}>Logout</Text>
            </Flex>
          ) : (
            <LogoutIcon fontSize={22} mt={5} />
          )}
        </LinkChakra>
      </Box>
    </>
  );
};

export default AvatarBox;
