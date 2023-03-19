import { Flex, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../services/TMDB';
import { MovieCard } from './index';

function MovieList() {
  const genreId = useSelector((state) => state.currentGenre);
  const { data, isFetching } = useGetMoviesQuery(genreId);

  return (
    <Flex
      bg="gray.900"
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
      flexWrap="wrap"
      justifyContent="center"
      columnGap={2}
      rowGap={4}
      p={2}
    >
      {/*<h1>Current Genre id: {genreId.currentGenreId}</h1>*/}

      {isFetching
        ? (
          <Flex h="92vh" w="100%" alignItems="center" justifyContent="center">
            <Spinner
              thickness="4px"
              speed="1s"
              emptyColor="gray.500"
              color="white"
              size="xl"
            />
          </Flex>
        )
        : (data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />))}

    </Flex>
  );
}

export default MovieList;
