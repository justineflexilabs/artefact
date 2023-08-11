import { FormEvent, useState } from 'react';

import {
  AbsoluteCenter,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { AuthFooterLogo, AuthImageCarousel } from '@/components/Auth';
import { EmailIcon, PasswordIcon, UserIcon } from '@public/icons/auth';

export default function SignIn() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (!res || !res.ok) {
      setIsLoading(false);
      return;
    }
    router.replace('/');
  };

  return (
    <Flex
      width={'full'}
      minHeight={'100vh'}
      alignItems="center"
      justifyContent="center"
    >
      <Box width="45%" height="100vh">
        <AuthImageCarousel />
      </Box>
      <Flex
        direction="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        width={'55%'}
      >
        <Box as="form" onSubmit={handleSubmit} width={'45%'}>
          <Text fontSize={'3xl'} mb={5} fontFamily={'Gilroy-Regular'}>
            Login Member Area
          </Text>
          <FormControl isRequired mb={3}>
            <FormLabel>Email Address</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Image src={UserIcon} alt="Email Icon" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Enter your email..."
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
                isRequired
                mb={4}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired mb={3}>
            <FormLabel fontFamily={'Gilroy-Light'} fontSize={16}>
              Password
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Image src={PasswordIcon} alt="Password Icon" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="******"
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
                isRequired
                mb={4}
              />
            </InputGroup>
          </FormControl>
          <Flex justifyContent={'space-between'} mb={5}>
            <Checkbox fontFamily={'Gilroy-Light'}>Remember me</Checkbox>
            <Link href="/auth/reset-password">
              <Text textStyle={'forgotPassword'}>Forgot Password?</Text>
            </Link>
          </Flex>
          <Button
            variant={'primary'}
            type="submit"
            width="100%"
            isLoading={isLoading}
            loadingText="Logging in..."
            size={'lg'}
          >
            <Text textStyle={'buttonText'}>Login</Text>
          </Button>

          <Box position="relative" pt="10" pb="10">
            <Divider colorScheme="black" borderColor={'black'} />
            <AbsoluteCenter
              bg="white"
              px="5"
              fontFamily={'Gilroy-Light'}
              fontSize={{ base: 'xs', md: 'xs', lg: 'sm' }}
            >
              Don&apos;t have an account?
            </AbsoluteCenter>
          </Box>
          <Button
            leftIcon={<Image src={EmailIcon} alt="email-icon" />}
            colorScheme="blackAlpha"
            variant="outline"
            width={'full'}
          >
            <Text fontFamily={'Gilroy-Medium'}>Contact Element</Text>
          </Button>
        </Box>
      </Flex>
      <AuthFooterLogo />
    </Flex>
  );
}
