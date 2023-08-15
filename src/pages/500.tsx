import React from 'react';

import { Button, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function ServerErrorPage() {
  const router = useRouter();

  return (
    <Flex alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <Card>
        <CardBody
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          padding={10}
        >
          <Text>Sorry, something went wrong.</Text>
          <Button
            onClick={() => router.back()}
            variant={'primary'}
            marginTop={5}
          >
            Go Back
          </Button>
        </CardBody>
      </Card>
    </Flex>
  );
}
