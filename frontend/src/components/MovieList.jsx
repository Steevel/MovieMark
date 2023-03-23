import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../services/TMDB';
import { CustomSpinner, MovieCard } from './index';

function MovieList() {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const genreId = useSelector((state) => state.currentGenre);
  const { data, isFetching } = useGetMoviesQuery(genreId);

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
            <CustomSpinner />
          </Flex>
        )
        : (data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />))}

    </Flex>
  );
}

export default MovieList;
