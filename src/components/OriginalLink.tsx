import { VFC } from 'react';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

type Props = {
  url: string;
  label: string;
  selected?: boolean;
};
const OriginalLink: VFC<Props> = ({ url, label, selected = false }) => (
  <NextLink href={url} passHref>
    <Button
      as="a"
      color={selected ? 'accent' : 'body'}
      cursor="pointer"
      borderRadius="0"
      bg="none"
      px={0}
      py={1}
      fontWeight="normal"
      fontSize="sm"
      letterSpacing={4}
      _hover={{ color: 'accent' }}
      textTransform="uppercase"
      display="block"
      w="full"
      h="auto"
      textAlign="right"
    >
      {label}
    </Button>
  </NextLink>
);

export default OriginalLink;
