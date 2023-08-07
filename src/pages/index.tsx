import { useEffect, useState } from 'react';

import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import { setAxiosBearerToken } from '@/lib/http';
import styles from '@/pages/Home.module.css';
import PostService, { PostData } from '@/services/PostService';
import { getSessionToken } from '@/utils/getSessionToken';

const inter = Inter({ subsets: ['latin'] });

const ArtifactCard = dynamic(() =>
  import('@/components/SideDrawer').then((res) => res.ArtifactCard)
);

interface Props {
  posts: PostData[];
  token: string;
}

export default function Dashboard({ posts, token: accessToken }: Props) {
  const [selectedPost, setSelectedPost] = useState<PostData[]>([]);

  const handleClickPost = async (id: number) => {
    const data = await PostService.getById(id);
    setSelectedPost(posts.filter((post: PostData) => data.id === post.id));
  };

  useEffect(() => {
    setAxiosBearerToken(accessToken);
  }, [accessToken]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Text fontWeight={'bold'}>Posts</Text>
        {posts.map((post: PostData) => (
          <Container key={post.id} paddingTop={5}>
            <Flex
              textAlign={'left'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Text>{post.title}</Text>
              <Button
                variant={'primary'}
                size={'sm'}
                onClick={() => handleClickPost(post.id)}
              >
                Click
              </Button>
            </Flex>
          </Container>
        ))}
        {selectedPost.length > 0 ? (
          <ArtifactCard selectedPost={selectedPost} />
        ) : null}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Set axios headers with access token
  const token = await getSessionToken(context);
  setAxiosBearerToken(token);

  const posts = await PostService.getAll();

  return {
    props: {
      posts,
      token,
    },
  };
};
