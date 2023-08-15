import { Container, Flex, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import UserService, { UserData } from '@/services/UserService';
import { handleServerError } from '@/utils/helpers/serverErrorHandler';
import styles from '@/pages/Home.module.css';

interface Props {
  users: UserData[];
  errorMessage: string;
}

export default function Users({ users }: Props) {
  return (
    <>
      <main className={`${styles.main}`}>
        <Text fontWeight={'bold'}>Users</Text>
        {users.map((user: UserData) => (
          <Container key={user.userId}>
            <Flex
              textAlign={'left'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Text>{user.name}</Text>
            </Flex>
          </Container>
        ))}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const users = await UserService.getAll();

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    return handleServerError(error);
  }
};
