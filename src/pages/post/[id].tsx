import { PostItem } from 'apis/post';
import { getAllPost, getPostById } from 'libs/apiClient';
import type { NextPage } from 'next';
import Logo from 'components/Logo';
import NextImage from 'next/image';
import { Box, Center } from '@chakra-ui/react';

type Props = {
  post: PostItem;
};

const Post: NextPage<Props> = ({ post }) => {
  // 横長の場合 true
  const isHorizontal = post.photo.width > post.photo.height;

  return (
    <Box p={[4, 6]}>
      <Logo />

      <Center
        h={[
          'calc(100vh - 1.5rem * 1.2 - 2rem)',
          'calc(100vh - 1.5rem * 1.2 - 3rem)',
        ]}
      >
        <Box className="imageContainer" h="96%">
          <NextImage
            src={
              isHorizontal
                ? `${post.photo.url}?w=1080`
                : `${post.photo.url}?h=1000`
            }
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </Box>
      </Center>
    </Box>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllPost();
  // eslint-disable-next-line no-console
  console.log(posts);

  return {
    paths: posts.contents.map((post) => ({
      params: { id: post.id },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
};

export default Post;
