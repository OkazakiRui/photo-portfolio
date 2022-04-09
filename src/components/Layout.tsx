import { ReactNode, useEffect, useRef, useState, VFC } from 'react';
import { Flex, List, ListItem, Box, Text } from '@chakra-ui/react';

import Logo from 'components/Logo';
import OriginalLink from 'components/OriginalLink';
import { GenreItem } from 'apis/genre';

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

  return (
    // space 6 = 1.5rem
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
      >
        <Box>
          <Logo />
          <Text
            fontFamily="italic"
            mt={2}
            fontSize={['sm', 'md']}
            letterSpacing={2}
          >
            Photograph Portfolio
          </Text>
        </Box>
        <List mt={[2, 0]}>
          <ListItem>
            <OriginalLink url="/" label="selected" />
            <OriginalLink url="/all" label="all" />
          </ListItem>
          {genres.map((genre) => (
            <ListItem key={genre.id}>
              <OriginalLink
                url={`/${genre.genreName}`}
                label={genre.genreName}
              />
            </ListItem>
          ))}
        </List>
      </Flex>
      {children}
    </Box>
  );
};

export default Layout;
