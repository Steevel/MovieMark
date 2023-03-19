import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';

function MovieCard({ movie }) {
  return (
    <Flex direction="column" justifyContent="space-between">
      <Image
        maxW="320px"
        maxH="300px"
        borderRadius="md"
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://fakeimg.pl/200x300/'}
      />

      <Flex mt={1} direction="column">
        <Text
          mt={2}
          maxW={48}
          noOfLines={2}
          color="white"
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="short"
          textAlign="center"
        >
          {movie.title}
        </Text>

      </Flex>
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Box as={MdStar} color="orange.400" />
          <Box ml={0.5} fontSize="sm" color="gray.400">
            <strong>{movie.vote_average}</strong>/10 ({movie.vote_count})
          </Box>
        </Flex>
        <Text color="gray.500">2022</Text>
      </Flex>
    </Flex>
  );
}

export default MovieCard;
