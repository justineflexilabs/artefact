import { FormEvent, useState } from 'react';

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
import { useDisclosure } from '@chakra-ui/hooks';

import { ArrowIcon, ModalIcon, UserIcon } from '@public/icons/auth';
import { AuthFooterLogo, AuthImageCarousel } from '@/components/auth';
import { ReusableModal } from '@/components/shared';

export default function ResetPassword() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [emailAddress, setEmailAddress] = useState<string>('');

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setEmailAddress('');
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
        <Box as="form" width={'50%'} onSubmit={handleSubmitForm}>
          <Text fontSize={'3xl'} marginBottom={5} fontFamily={'Gilroy-Regular'}>
            Recover Password
          </Text>
          <FormControl isRequired marginBottom={3}>
            <FormLabel fontFamily={'Gilroy-Light'} fontSize={16}>
              Email Address
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Image src={UserIcon} alt="Email Icon" />
              </InputLeftElement>
              <Input
                value={emailAddress}
                type="email"
                placeholder="Enter your email..."
                onChange={({ target }) => setEmailAddress(target.value)}
                isRequired
                marginBottom={4}
              />
            </InputGroup>
          </FormControl>

          <Button
            variant={'primary'}
            type="submit"
            width="100%"
            loadingText="Submitting..."
            size={'lg'}
            marginBottom={4}
          >
            <Text textStyle={'buttonText'}>Reset Password</Text>
          </Button>
          <Flex justifyContent={'flex-end'}>
            <Link href="/auth/sign-in" style={{ display: 'flex' }}>
              <Image src={ArrowIcon} alt="arrow icon" />{' '}
              <Text marginLeft={2}>Go back to login page</Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
      <AuthFooterLogo />

      <ReusableModal
        isOpen={isOpen}
        onClose={handleClose}
        footerActions={
          <>
            <Button
              variant={'primary'}
              marginRight={3}
              marginBottom={3}
              onClick={handleClose}
            >
              Close
            </Button>
          </>
        }
      >
        <Image src={ModalIcon} alt="Email Icon" width={100} height={100} />
        <Text marginTop={5}>
          Please check your email to reset your password
        </Text>
      </ReusableModal>
    </Flex>
  );
}
