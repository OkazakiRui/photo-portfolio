import { PostItem } from 'apis/post';
import { getAllPost, getPostById } from 'libs/apiClient';
import type { NextPage } from 'next';
import Logo from 'components/Logo';
import NextImage from 'next/image';
import {
  Box,
  Center,
  Heading,
  Button,
  Flex,
  HStack,
  VStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
} from 'react-share';

type Props = {
  post: PostItem;
  postsData: { [key: string]: PostItem[] };
};

const Post: NextPage<Props> = ({ post, postsData }) => {
  const isHorizontal = post.photo.width > post.photo.height;

  const router = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const url = `${origin}${router.asPath}`;

  const queryGenre =
    'category' in router.query ? (router.query.category as string) : 'selected';
  const posts = queryGenre in postsData ? postsData[queryGenre] : [];
  const indexNumber = posts.findIndex((postItem) => postItem.id === post.id);
  const [prev, next] = [posts[indexNumber - 1], posts[indexNumber + 1]];

  return (
    <Box p={[4, 6]}>
      <Box as="header" pos="relative" zIndex={1}>
        <Logo />
      </Box>
      <Box
        mb={[4, 6]}
        h={[
          'calc(100vh - 2rem - 0.25rem - 1.125rem * 1.33 - 0.5rem - 0.75rem * 1.5)',
          'calc(100vh - 3rem - 0.25rem - 1.25rem * 1.2 - 0.5rem - 0.875rem * 1.5)',
        ]}
        pos="relative"
      >
        <Center h="full">
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
          fontSize={['sm', 'md']}
          pos="absolute"
          zIndex={1}
          bottom={2}
          left={[2, 16]}
          textTransform="uppercase"
        >
          {'title' in post ? post.title : 'No Title'}
        </Heading>
        <Flex
          justify="right"
          pos={['absolute', 'static']}
          bottom={1}
          right={1}
          gap={2}
        >
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
                pos={['static', 'fixed']}
                top={0}
                left={0}
                height={['fit-content', 'full']}
                px={0}
                zIndex={10}
                width={['fit-content', '5rem']}
                bg="transparent"
                borderRadius={['50%', '0']}
                border={['1px solid', 'unset']}
                borderColor="body"
                minWidth={0}
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
                <ArrowBackIcon display={['block', 'none']} p={1} w={6} h={6} />
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
                pos={['static', 'fixed']}
                top={0}
                right={0}
                height={['fit-content', 'full']}
                width={['fit-content', '5rem']}
                px={0}
                zIndex={10}
                bg="transparent"
                borderRadius={['50%', '0']}
                border={['1px solid', 'unset']}
                borderColor="body"
                minWidth={0}
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
                  w={6}
                  h={6}
                />
              </Button>
            </NextLink>
          )}
        </Flex>
      </Box>
      <VStack align="end" px={[0, 16]} mt={16}>
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize={['sm', 'md']}
          fontFamily="default"
          textDecoration="underline"
        >
          Share
        </Heading>
        <HStack>
          <FacebookShareButton
            url={url}
            title="RuiOkazaki - PhotographPortfolio"
          >
            <Icon as={FacebookIcon} borderRadius={8} w={8} h={8} />
          </FacebookShareButton>
          <LineShareButton url={url} title="RuiOkazaki - PhotographPortfolio">
            <Icon as={LineIcon} borderRadius={8} w={8} h={8} />
          </LineShareButton>
          <TwitterShareButton
            url={url}
            title="RuiOkazaki - PhotographPortfolio"
            via="yoruhanemutaiyo"
            related={['yoruhanemutaiyo']}
          >
            <Icon as={TwitterIcon} borderRadius={8} w={8} h={8} />
          </TwitterShareButton>
        </HStack>
      </VStack>
      <Flex justify="space-between" mt={16}>
        {prev && (
          <NextLink
            href={`/post/${prev.id}${
              'category' in router.query ? `?category=${queryGenre}` : ''
            }`}
            passHref
          >
            <Link
              href="/"
              flexGrow={1}
              borderColor="body"
              border="1px solid"
              textAlign="center"
              h={10}
              lineHeight={10}
              fontSize={['sm', 'md']}
              _hover={{
                color: 'accent',
                borderColor: 'accent',
              }}
            >
              Prev
            </Link>
          </NextLink>
        )}
        <NextLink href="/" passHref>
          <Link
            href="/"
            flexGrow={1}
            borderColor="body"
            border="1px solid"
            borderX="0px"
            textAlign="center"
            h={10}
            lineHeight={10}
            fontSize={['sm', 'md']}
            _hover={{
              color: 'accent',
              borderColor: 'accent',
            }}
          >
            Home
          </Link>
        </NextLink>

        {next && (
          <NextLink
            href={`/post/${next.id}${
              'category' in router.query ? `?category=${queryGenre}` : ''
            }`}
            passHref
          >
            <Link
              href="/"
              flexGrow={1}
              borderColor="body"
              border="1px solid"
              textAlign="center"
              h={10}
              lineHeight={10}
              fontSize={['sm', 'md']}
              _hover={{
                color: 'accent',
                borderColor: 'accent',
              }}
            >
              Next
            </Link>
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
