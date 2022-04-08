import { VFC } from 'react';
import { Heading } from '@chakra-ui/react';

const Logo: VFC = () => (
  <Heading
    fontFamily="default"
    textTransform="uppercase"
    letterSpacing={8}
    fontWeight="normal"
    fontSize={['xl', '2xl']}
    as="h1"
  >
    Rui Okazaki
  </Heading>
);

export default Logo;
