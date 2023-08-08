import { Button, LinkBox, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { Metadata } from 'next';
import { signOut } from 'next-auth/react';

import { removeToken } from '@/lib/http';

export const metadata: Metadata = {
  title: 'Sidebar',
  description: 'Sidebar desc',
};

export default function Sidebar() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/sign-in`,
      redirect: true,
    });

    removeToken();
  };

  return (
    <VStack as="nav" spacing={4} align="start" style={{ padding: '1rem' }}>
      <LinkBox>
        <Link href={'/'}>Posts</Link>
      </LinkBox>
      <LinkBox>
        <Link href={'/users'}>Users</Link>
      </LinkBox>
      <LinkBox>
        <Link href={'/add-installation'}>Add Installation</Link>
      </LinkBox>
      <Button variant={'primary'} onClick={handleLogout}>
        Log out
      </Button>
    </VStack>
  );
}
