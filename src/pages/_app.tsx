import '@/styles/globals.css';
import { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
// import dynamic from 'next/dynamic';

import theme from '@/themes';

// const Sidebar = dynamic(() =>
//   import('@/components/Sidebar').then((res) => res.Sidebar)
// );

export default function App({ Component, pageProps }: AppProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <ChakraProvider theme={theme}>
        {/* {isClicked ? <Sidebar /> : null}
        <Button onClick={() => setIsClicked((prevState) => !prevState)}>
          Click me
        </Button> */}
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
