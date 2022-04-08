import { VFC } from 'react';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Props = {
  url: string;
  label: string;
};
const OriginalLink: VFC<Props> = ({ url, label }) => {
  const router = useRouter();

  return (
    <NextLink href={url} passHref>
      <Button
        as="a"
        color={router.pathname === url ? 'accent' : 'body'}
        cursor="pointer"
        borderRadius="0"
        bg="none"
        px={0}
        py={1}
        fontWeight="normal"
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
};

export default OriginalLink;
