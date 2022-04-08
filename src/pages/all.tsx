import Masonry from 'react-masonry-css';
import { PostItem } from 'apis/post';
import Layout from 'components/Layout';
import { getAllPost } from 'libs/apiClient';
import type { NextPage } from 'next';
import { Box, Image } from '@chakra-ui/react';
import NextImage from 'next/image';

type Props = {
  posts: PostItem[];
};

const breakpointCols = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const all: NextPage<Props> = ({ posts }) => (
  <Layout
    categories={[
      { id: 1, name: 'piyo' },
      { id: 2, name: 'fugafuga' },
    ]}
  >
    <Box
      as={Masonry}
      breakpointCols={breakpointCols}
      display="flex"
      width="auto"
      gap="30px"
      className=""
      columnClassName=""
    >
      {posts.map((post) => (
        <Box key={post.id} className="imageContainer">
          {/* TODO: as NextImage か NextImage でパフォーマンスは変わるか検証 */}
          <Image
            as={NextImage}
            src={post.photo.url}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      ))}
    </Box>
  </Layout>
);

export const getStaticProps = async () => {
  const posts = await getAllPost();

  return {
    props: {
      posts: posts.contents,
    },
  };
};

export default all;
