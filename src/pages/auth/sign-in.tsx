import { FormEventHandler, useState } from 'react';

import { Button, Input, Flex, Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

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
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Box
        as="form"
        onSubmit={handleSubmit}
        width="100%"
        maxWidth="400px"
        p={6}
        mb={4}
      >
        <Heading as="h1" size="md" mb={4}>
          Login Member Area
        </Heading>
        <Input
          type="email"
          placeholder="Enter your email..."
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          isRequired
          mb={4}
        />
        <Input
          type="password"
          placeholder="******"
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          isRequired
          mb={4}
        />
        <Button
          variant={'primary'}
          type="submit"
          width="100%"
          isLoading={isLoading}
          loadingText="Signing in..."
        >
          Sign In
        </Button>
      </Box>
    </Flex>
  );
}
