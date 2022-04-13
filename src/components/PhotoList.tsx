import { VFC } from 'react';
import Masonry from '@mtsmfm/react-masonry';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { PostItem } from 'apis/post';
import { Box } from '@chakra-ui/react';

type Props = {
  posts: PostItem[];
};
const PhotoList: VFC<Props> = ({ posts }) => {
  const router = useRouter();

  return (
    <Masonry minColumnWidth={400} gap={20} transition="0.5s">
      {posts.map((post) => (
        <Box
          key={post.id}
          position="relative"
          sx={{
            '&:hover::after': {
              opacity: '1',
              bg: 'rgba(0, 0, 0, 0.6)',
            },
            '*': {
              transition: 'all 400ms',
            },
            '&:hover img': {
              transform: 'scale(1.2)',
            },
          }}
          _after={{
            content: `"${post.shootingDate.slice(0, 10)}"`,
            fontSize: 'sm',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            w: 'full',
            h: 'full',
            transitionProperty: 'all',
            transitionDuration: 'normal',
            opacity: '0',
            top: '0',
            left: '0',
            color: 'white',
            pointerEvents: 'none',
            bg: '000',
            overflow: 'hidden',
          }}
        >
          <NextLink
            href={`/post/${post.id}${
              router.asPath !== '/'
                ? `?category=${router.asPath.slice(10)}`
                : ''
            }`}
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
        </Box>
      ))}
    </Masonry>
  );
};

export default PhotoList;
