import { VFC } from 'react';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

type Props = {
  url: string;
  name: string;
  selected?: boolean;
};
const Link: VFC<Props> = ({ url, name, selected = false }) => (
  <NextLink href={url} passHref>
    <Button
      as="a"
      color={selected ? 'accent' : 'body'}
      cursor="pointer"
      borderRadius="0"
      bg="none"
      px={0}
      py={1}
      _hover={{ color: 'accent' }}
      textTransform="uppercase"
      display="block"
      w="full"
      h="fit"
      textAlign="right"
    >
      {name}
    </Button>
  </NextLink>
);

export default Link;
