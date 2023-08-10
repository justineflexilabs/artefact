import { useState } from 'react';

import {
  Box,
  Button,
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

import { ArrowIcon, UserIcon } from '@public/icons/auth';
import { AuthFooterLogo, AuthImageCarousel } from '@/components/Auth';

export default function ResetPassword() {
  const [emailAddress, setEmailAddress] = useState<string>('');
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
        <Box as="form" width={'50%'}>
          <Text fontSize={'3xl'} mb={5} fontFamily={'Gilroy-Regular'}>
            Recover Password
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
                onChange={({ target }) => setEmailAddress(target.value)}
                isRequired
                mb={4}
              />
            </InputGroup>
          </FormControl>

          <Button
            variant={'primary'}
            type="submit"
            width="100%"
            loadingText="Submitting..."
            size={'lg'}
            mb={4}
          >
            <Text textStyle={'buttonText'}>Reset Password</Text>
          </Button>
          <Flex justifyContent={'flex-end'}>
            <Link href="/auth/sign-in" style={{ display: 'flex' }}>
              <Image src={ArrowIcon} alt="arrow icon" />{' '}
              <Text ml={2}>Go back to login page</Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
      <AuthFooterLogo />
    </Flex>
  );
}
