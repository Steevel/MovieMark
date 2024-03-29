import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdStar } from 'react-icons/md';
import { useSelector } from 'react-redux';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.mode.darkMode);

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      cursor="pointer"
      onClick={() => navigate(`/movie/${movie.id}`)}
      maxH="400px"
      maxW="320px"
      _hover={{
        transform: 'scale(1.05)',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
      }}
    >
      <Image
        maxW="320px"
        maxH="300px"
        borderRadius="md"
        src={movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : 'https://fakeimg.pl/200x300/'}
      />

      <Flex mt={1} direction="column">
        <Text
          mt={2}
          maxW={48}
          noOfLines={2}
          color={darkMode ? 'gray.50' : 'black'}
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
          <Box ml={0.5} fontSize="sm" color={darkMode ? 'gray.400' : 'gray.600'}>
            <strong>{movie.vote_average?.toFixed(1)}</strong>/10 ({movie.vote_count})
          </Box>
        </Flex>
        <Text color={darkMode ? 'gray.500' : 'gray.600'}>{movie.release_date?.slice(0, 4)}</Text>
      </Flex>
    </Flex>
  );
}

export default MovieCard;
