import Layout from 'components/Layout';
import { PostItem } from 'apis/post';
import { getAllPost } from 'libs/apiClient';
import type { NextPage } from 'next';
import PhotoList from 'components/PhotoList';

type Props = {
  posts: PostItem[];
};

const All: NextPage<Props> = ({ posts }) => (
  <Layout
    categories={[
      { id: 1, name: 'piyo' },
      { id: 2, name: 'fugafuga' },
    ]}
  >
    <PhotoList posts={posts} />
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

export default All;
