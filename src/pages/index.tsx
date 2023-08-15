import { useEffect, useState } from 'react';

import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

import PostService, { PostData } from '@/services/PostService';
import { getSessionAccessToken } from '@/utils/helpers/getSessionAccessToken';
import { handleServerError } from '@/utils/helpers/serverErrorHandler';
import { setAxiosBearerToken } from '@/lib/http';
import styles from '@/pages/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const SideDrawer = dynamic(() =>
  import('@/components/sidedrawer').then((res) => res.SideDrawer)
);

interface Props {
  posts: PostData[];
  token: string;
  errorMessage: string;
}

export default function Dashboard({ posts, token: accessToken }: Props) {
  const [selectedPost, setSelectedPost] = useState<PostData[]>([]);

  const handleClickPost = async (id: number) => {
    const { data } = await PostService.getById(id);
    setSelectedPost(posts.filter((post: PostData) => data.id === post.id));
  };

  useEffect(() => {
    setAxiosBearerToken(accessToken);
  }, [accessToken]);

  return (
    <>
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
          <SideDrawer selectedPost={selectedPost} />
        ) : null}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Set axios headers with access token
  const token = await getSessionAccessToken(context);
  setAxiosBearerToken(token);

  try {
    const posts = await PostService.getAll();

    return {
      props: {
        posts,
        token,
      },
    };
  } catch (error) {
    return handleServerError(error);
  }
};
