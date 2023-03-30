import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../services/TMDB';
import { CustomSpinner, MovieCard } from './index';

function MovieList() {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const { currentGenreId, searchQuery } = useSelector((state) => state.currentGenre);
  const { data, isFetching } = useGetMoviesQuery({ currentGenreId, searchQuery });

  return (
    <Flex
      bg={darkMode ? 'gray.900' : 'gray.50'}
      w="100%"
      h="92vh"
      overflowY="scroll"
      sx={{
        '::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray.600',
          borderRadius: '24px',
        },
      }}
      p={2}
    >

      {isFetching
        ? (
          <Flex h="92vh" w="100%" alignItems="center" justifyContent="center">
            <CustomSpinner />
          </Flex>
        )
        : (
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            w="100%"
            columnGap={2}
            rowGap={4}
          >
            {
              data.results.length > 0
                ? (data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />))
                : (<Text color={darkMode ? 'gray.50' : 'black'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>No Results found!</Text>)
            }
          </Flex>
        )}

    </Flex>
  );
}

export default MovieList;
