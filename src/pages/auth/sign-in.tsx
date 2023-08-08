import { FormEventHandler, useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { PasswordIcon, UserIcon } from '@public/icons/auth';
import Sample from '@public/images/1.png';

export default function SignIn() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
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
      minHeight={'100vh'}
      alignItems="center"
      justifyContent="center"
      width="100vw"
    >
      <Box width="100%" height="100vh">
        <Image
          src={Sample}
          alt="test"
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Flex
        direction="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        width={'full'}
      >
        <Box as="form" onSubmit={handleSubmit} width={'60%'}>
          <Text fontSize={'3xl'} mb={5} fontFamily={'Gilroy-Regular'}>
            Login Member Area
          </Text>
          <FormControl isRequired mb={3}>
            <FormLabel fontFamily={'Gilroy-Light'} fontSize={16}>
              Email Address
            </FormLabel>
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
          <Button
            fontFamily={'Gilroy-Light'}
            variant={'primary'}
            type="submit"
            width="100%"
            isLoading={isLoading}
            loadingText="Logging in..."
            size={'lg'}
            mb={4}
          >
            <Text fontSize={'2xl'}>Login</Text>
          </Button>
          <Flex justifyContent={'space-between'}>
            <Checkbox>Remember me</Checkbox>
            <Text>Forgot Password?</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
