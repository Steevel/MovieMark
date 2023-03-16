import React from 'react';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../services/TMDB';

function MovieList() {
  const genreId = useSelector((state) => state.currentGenre);
  const { data, isFetching } = useGetMoviesQuery(genreId);

  return (
    <>
      <h1>Current Genre id: {genreId.currentGenreId}</h1>
      {isFetching ? (<h4>Data is still loading</h4>) : (data.results.map((movie, index) => <h5 key={movie.id}>{index + 1}. {movie.title}</h5>))}
      {/*<HStack spacing="14px">
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          isLoading={isFetching}
          disabled={page === 1}
        >
          <Icon as={MdArrowBack} />
        </Button>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          isLoading={isFetching}
          disabled={page === posts.total_pages}
        >
          <Icon as={MdArrowForward} />
        </Button>
        <Box>{`${page} / ${posts.total_pages}`}</Box>
      </HStack>*/}
    </>
  );
}

export default MovieList;
