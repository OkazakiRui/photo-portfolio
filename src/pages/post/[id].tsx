import { PostItem } from 'apis/post';
import { getAllPost, getPostById } from 'libs/apiClient';
import type { NextPage } from 'next';
import Logo from 'components/Logo';
import NextImage from 'next/image';
import { Box, Center, Heading, Button, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

type Props = {
  post: PostItem;
  postsData: { [key: string]: PostItem[] };
};

const Post: NextPage<Props> = ({ post, postsData }) => {
  const isHorizontal = post.photo.width > post.photo.height;

  const router = useRouter();
  const queryGenre =
    'category' in router.query ? (router.query.category as string) : 'selected';
  const posts = queryGenre in postsData ? postsData[queryGenre] : [];
  const indexNumber = posts.findIndex((postItem) => postItem.id === post.id);
  const [prev, next] = [posts[indexNumber - 1], posts[indexNumber + 1]];

  return (
    <Box p={[4, 6]}>
      <Box as="header" pos="relative" zIndex={10}>
        <Logo />
      </Box>
      {/* <Box mb={[4, 6]}> */}
      <Box>
        <Center
          h={[
            'calc(100vh - 2rem - 0.25rem - 1.125rem * 1.33 - 0.5rem - 0.75rem * 1.5)',
            'calc(100vh - 3rem - 0.25rem - 1.25rem * 1.2 - 0.5rem - 0.875rem * 1.5)',
          ]}
        >
          <Box className="imageContainer" h={['84%', '96%']} w={['98%', '78%']}>
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
        <Heading
          fontFamily="default"
          fontSize="sm"
          pos="absolute"
          zIndex={10}
          bottom={6}
          left={6}
          textTransform="uppercase"
        >
          {'title' in post ? post.title : 'No Title'}
        </Heading>
      </Box>
      <Flex justify="right" pos={['absolute', 'static']} bottom={5} right={3}>
        {prev && (
          <NextLink
            href={`/post/${prev.id}${
              'category' in router.query ? `?category=${queryGenre}` : ''
            }`}
            passHref
          >
            <Button
              as="a"
              href="/"
              pos={['static', 'absolute']}
              top={0}
              left={0}
              height={['fit-content', 'full']}
              px={0}
              zIndex={1}
              width={['fit-content', '5rem']}
              bg="transparent"
              borderRadius="0"
              _hover={{
                bg: ['none', 'accent'],
              }}
              _after={{
                content: ['""', '"Prev"'],
                position: 'absolute',
                transform: ['rotate(0deg)', 'rotate(90deg)'],
                left: 6,
              }}
            >
              <ArrowBackIcon
                display={['block', 'none']}
                p={1}
                outline="1px solid"
                outlineColor="body"
                borderRadius="50%"
                w={6}
                h={6}
                _hover={{ color: 'accent', outlineColor: 'accent' }}
              />
            </Button>
          </NextLink>
        )}
        {next && (
          <NextLink
            href={`/post/${next.id}${
              'category' in router.query ? `?category=${queryGenre}` : ''
            }`}
            passHref
          >
            <Button
              as="a"
              href="/"
              pos={['static', 'absolute']}
              top={0}
              right={0}
              height={['fit-content', 'full']}
              px={0}
              zIndex={1}
              width={['fit-content', '5rem']}
              bg="transparent"
              borderRadius="0"
              _hover={{
                bg: ['none', 'accent'],
              }}
              _after={{
                content: ['""', '"Next"'],
                position: 'absolute',
                transform: ['rotate(0deg)', 'rotate(90deg)'],
                right: 5,
              }}
            >
              <ArrowForwardIcon
                display={['block', 'none']}
                p={1}
                outline="1px solid"
                outlineColor="body"
                borderRadius="50%"
                w={6}
                h={6}
                _hover={{ color: 'accent', outlineColor: 'accent' }}
              />
            </Button>
          </NextLink>
        )}
      </Flex>
    </Box>
  );
};

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

  const postsData: { [key: string]: PostItem[] } = {};
  postsData.all = (await getAllPost()).contents;
  if (post.favorite)
    postsData.selected = (await getAllPost('selected')).contents;

  // eslint-disable-next-line no-restricted-syntax
  for await (const postItem of post.genre) {
    postsData[postItem.genreName] = (await getAllPost(postItem.id)).contents;
  }

  return {
    props: {
      post,
      postsData,
    },
  };
};

export default Post;
