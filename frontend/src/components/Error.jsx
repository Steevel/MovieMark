import { Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function Error() {
  const darkMode = useSelector((state) => state.mode.darkMode);

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" h="92vh" bg={darkMode ? 'gray.900' : 'gray.50'}>
      <Heading fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} mb={6} color={darkMode ? 'white' : 'red.500'} textAlign="center">Somthing went wrong. Please try again!</Heading>
    </Flex>
  );
}

export default Error;
