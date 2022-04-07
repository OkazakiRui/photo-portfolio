import React, { VFC } from 'react';
import { Heading } from '@chakra-ui/react';

const Logo: VFC = () => {
  return (
    <Heading
      fontFamily="default"
      textTransform="uppercase"
      letterSpacing={2}
      fontWeight="nomal"
      fontSize={['xl', '2xl']}
      as="h1"
    >
      Rui Okazaki
    </Heading>
  );
};

export default Logo;
