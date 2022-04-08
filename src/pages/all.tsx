import Masonry from '@mtsmfm/react-masonry';
import { PostItem } from 'apis/post';
import Layout from 'components/Layout';
import { getAllPost } from 'libs/apiClient';
import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';

type Props = {
  posts: PostItem[];
};

const all: NextPage<Props> = ({ posts }) => (
  <Layout
    categories={[
      { id: 1, name: 'piyo' },
      { id: 2, name: 'fugafuga' },
    ]}
  >
    <Masonry minColumnWidth={400} gap={30} transition="0.5s">
      {posts.map((post) => (
        <Box key={post.id} className="imageContainer">
          <NextImage
            src={`${post.photo.url}?w=500`}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      ))}
    </Masonry>
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
