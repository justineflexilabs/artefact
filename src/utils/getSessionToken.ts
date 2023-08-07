import { ParsedUrlQuery } from 'querystring';

import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

import { getAuthHeader } from '@/lib/http';

export const getSessionToken = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const authHeader = getAuthHeader() as string;

  if (!authHeader) {
    const session = await getSession(context);
    console.log('session', session);
    return session?.user.accessToken as string;
  }

  const bearerString = authHeader;
  const accessToken = bearerString.replace('Bearer ', '');

  return accessToken;
};
