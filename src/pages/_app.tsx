import '@/styles/globals.css';

import { Box, ChakraProvider, Flex, SlideFade } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import theme from '@/themes';

const Sidebar = dynamic(() =>
  import('@/components/Sidebar').then((res) => res.Sidebar)
);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const isAuthRoute = router.pathname.includes('auth');
  const showSidebar =
    !isAuthRoute && router.pathname !== '/404' && router.pathname !== '/500';
  return (
    <>
      <SessionProvider session={session} refetchOnWindowFocus={false}>
        <ChakraProvider theme={theme}>
          <Flex>
            {showSidebar && <Sidebar />}

            <Box width="full">
              {!isAuthRoute ? (
                <SlideFade key={router.route} in={true}>
                  <Component {...pageProps} />
                </SlideFade>
              ) : (
                <Component {...pageProps} />
              )}
            </Box>
          </Flex>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
