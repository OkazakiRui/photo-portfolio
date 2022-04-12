import { VFC } from 'react';
import Masonry from '@mtsmfm/react-masonry';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { PostItem } from 'apis/post';

type Props = {
  posts: PostItem[];
};
const PhotoList: VFC<Props> = ({ posts }) => {
  const router = useRouter();

  return (
    <Masonry minColumnWidth={400} gap={20} transition="0.5s">
      {posts.map((post) => (
        <NextLink
          href={`/post/${post.id}${
            router.asPath !== '/' ? `?category=${router.asPath.slice(10)}` : ''
          }`}
          key={post.id}
          passHref
        >
          <a className="imageContainer" href="/404">
            <NextImage
              src={`${post.photo.url}?w=500`}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
        </NextLink>
      ))}
    </Masonry>
  );
};

export default PhotoList;
