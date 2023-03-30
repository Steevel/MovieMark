import { Flex, IconButton, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import { useGetMoviesQuery } from '../services/TMDB';
import { CustomSpinner, MovieCard } from './index';

function MovieList() {
  const [page, setPage] = useState(1);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const { currentGenreId, searchQuery } = useSelector((state) => state.currentGenre);
  const { data, isFetching } = useGetMoviesQuery({ currentGenreId, searchQuery, page });

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
      direction="column"
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
              data?.results?.length > 0
                ? (data?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />))
                : (<Text color={darkMode ? 'gray.50' : 'black'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>No Results found!</Text>)
            }
          </Flex>
        )}

      <Flex justifyContent="center" alignItems="center" pt={3}>
        <IconButton
          colorScheme="red"
          aria-label="Previous Page"
          icon={<FaAngleLeft />}
          onClick={() => (page >= 2 ? setPage(page - 1) : page)}
          isDisabled={page <= 1}
        />
        <Flex w={10} h={10} justifyContent="center" alignItems="center">
          <Text color={darkMode ? 'gray.50' : 'black'} textAlign="center" as="b">{page}</Text>
        </Flex>
        <IconButton
          colorScheme="red"
          aria-label="Next Page"
          icon={<FaAngleRight />}
          isDisabled={page >= 500}
          onClick={() => (page <= 499 ? setPage(page + 1) : page)}
        />
      </Flex>
    </Flex>
  );
}

export default MovieList;
