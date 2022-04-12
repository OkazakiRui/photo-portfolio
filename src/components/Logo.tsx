import { VFC } from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

const Logo: VFC = () => (
  <NextLink href="/" passHref>
    <VStack
      as="a"
      href="/"
      align="left"
      h="fit-content"
      w="fit-content"
      gap={1}
      _hover={{ color: 'accent' }}
      transitionProperty="common"
      transitionDuration="normal"
    >
      <Heading
        fontFamily="default"
        textTransform="uppercase"
        letterSpacing={8}
        fontWeight="normal"
        fontSize={['lg', 'xl']}
        as="h1"
      >
        Rui Okazaki
      </Heading>
      <Text fontFamily="italic" fontSize={['xs', 'sm']} letterSpacing={2}>
        Photograph Portfolio
      </Text>
    </VStack>
  </NextLink>
);

export default Logo;
