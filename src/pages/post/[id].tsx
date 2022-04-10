import { PostItem } from 'apis/post';
import { getAllPost, getPostById } from 'libs/apiClient';
import type { NextPage } from 'next';

type Props = {
  post: PostItem;
};

const Post: NextPage<Props> = ({ post }) => <p>{post.photo.url}</p>;

export const getStaticPaths = async () => {
  const posts = await getAllPost();

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
