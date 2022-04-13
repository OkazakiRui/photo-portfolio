import { ReactNode, useEffect, useRef, useState, VFC } from 'react';
import { Flex, List, ListItem, Box, VStack } from '@chakra-ui/react';

import Logo from 'components/Logo';
import OriginalLink from 'components/OriginalLink';
import { GenreItem } from 'apis/genre';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
  genres: GenreItem[];
};

const Layout: VFC<Props> = ({ children, genres }) => {
  const headerElement = useRef<HTMLDivElement>(null);
  const [elementHeight, setElementHeight] = useState<number>(0);

  useEffect(() => {
    if (!headerElement.current) return;
    setElementHeight(headerElement.current.clientHeight);
  }, [headerElement]);

  const router = useRouter();

  return (
    <Box p={[4, 6]} pt={[4, `calc(${elementHeight}px + 1.5rem)`]}>
      <Flex
        as="header"
        ref={headerElement}
        pos={['static', 'fixed']}
        zIndex="999999"
        flexDirection={['column', 'row']}
        justify="space-between"
        align="left"
        w="full"
        pt={[0, 6]}
        px={[0, 6]}
        top={0}
        left={0}
        mb={[4, 0]}
        pointerEvents="none"
      >
        <Box pointerEvents="auto">
          <Logo />
        </Box>
        <VStack as={List} align="left" mt={[2, 0]} pointerEvents="auto">
          <ListItem>
            <OriginalLink
              url="/"
              label="selected"
              selected={router.asPath === '/'}
            />
          </ListItem>
          <ListItem>
            <OriginalLink
              url="/category/all"
              label="all"
              selected={router.asPath === '/category/all'}
            />
          </ListItem>
          {genres.map((genre) => (
            <ListItem key={genre.id}>
              <OriginalLink
                url={`/category/${genre.genreName}`}
                label={genre.genreName}
                selected={router.asPath === `/category/${genre.genreName}`}
              />
            </ListItem>
          ))}
        </VStack>
      </Flex>
      {children}
    </Box>
  );
};

export default Layout;
