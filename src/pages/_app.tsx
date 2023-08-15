import '@/styles/globals.css';

import { ChakraProvider, Flex, HStack, SlideFade } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import theme from '@/themes';
import useSidebarStore from '@/stores/useSidebarStore';

const Sidebar = dynamic(() =>
  import('@/components/sidebar').then((res) => res.Sidebar)
);

const Header = dynamic(() =>
  import('@/components/header').then((res) => res.Header)
);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);

  const router = useRouter();
  const isAuthRoute = router.pathname.includes('auth');
  const showSidebar =
    !isAuthRoute && router.pathname !== '/404' && router.pathname !== '/500';
  return (
    <>
      <Head>
        <title>Artefact</title>
        <meta property="og:title" content="Artefact" key="title" />
      </Head>
      <SessionProvider session={session} refetchOnWindowFocus={false}>
        <ChakraProvider theme={theme}>
          <HStack width="full" height="100vh" padding={0} margin={0} gap={0}>
            {showSidebar && (
              <>
                <Flex
                  as="aside"
                  width="full"
                  height="full"
                  maxWidth={isCollapsed ? 320 : 100}
                  bg="primary.500"
                  alignItems="start"
                  padding={6}
                  paddingTop={3}
                  flexDirection="column"
                  justifyContent="space-between"
                  transition="ease-in-out .2s"
                >
                  <Sidebar />
                </Flex>
              </>
            )}

            <Flex width="full" height={'100vh'} flexDirection="column">
              {!isAuthRoute ? (
                <SlideFade key={router.route} in={true}>
                  <Header />
                  <Component {...pageProps} />
                </SlideFade>
              ) : (
                <Component {...pageProps} />
              )}
            </Flex>
          </HStack>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
