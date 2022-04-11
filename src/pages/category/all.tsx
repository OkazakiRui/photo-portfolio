import Layout from 'components/Layout';
import { PostItem } from 'apis/post';
import { getAllGenre, getAllPost } from 'libs/apiClient';
import type { NextPage } from 'next';
import PhotoList from 'components/PhotoList';
import { GenreItem } from 'apis/genre';

type Props = {
  posts: PostItem[];
  genres: GenreItem[];
};

const All: NextPage<Props> = ({ posts, genres }) => (
  <Layout genres={genres}>
    <PhotoList posts={posts} />
  </Layout>
);

export const getStaticProps = async () => {
  const posts = await getAllPost();
  const genres = await getAllGenre();

  return {
    props: {
      posts: posts.contents,
      genres: genres.contents,
    },
  };
};

export default All;
