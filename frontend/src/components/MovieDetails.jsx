import { Box, CircularProgress, CircularProgressLabel, Flex, Image, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetMovieQuery, useGetSimilarMoviesQuery } from '../services/TMDB';
import { CustomSpinner, MovieCard } from './index';

//Import Swiper styles
//import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

function MovieDetails() {
  const { id } = useParams();
  const darkMode = useSelector((state) => state.mode.darkMode);
  const { data, isFetching } = useGetMovieQuery(id);
  const { data: similarMovies, isFetching: isLoading } = useGetSimilarMoviesQuery(id);

  return (
    <Flex
      p={3}
      w="100%"
      h="92vh"
      overflowY="scroll"
      bg={darkMode ? 'gray.900' : 'gray.50'}
      direction={{ base: 'column' }}
    >
      {isFetching ? (
        <Flex h="92vh" w="100%" alignItems="center" justifyContent="center">
          <CustomSpinner />
        </Flex>
      ) : (
        <>
          <Flex gap={3} direction={{ base: 'column', lg: 'row' }}>
            <Flex justifyContent="center">
              <Image
                maxW={{ base: '100vw', md: '40vw', lg: '40vw' }}
                maxH={{ base: '50vh', lg: '60vh' }}
                borderRadius="md"
                src={data.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                  : 'https://fakeimg.pl/200x300/'}
              />
            </Flex>
            <Box>
              <Text color={darkMode ? 'gray.50' : 'black'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>{data.title}
              </Text>

              <Box>
                <Text color={darkMode ? 'gray.50' : 'black'} as="i">{data?.tagline}</Text>
              </Box>

              <Flex gap={2} mt={2} flexWrap="wrap">

                <CircularProgress value={Math.round(data.vote_average * 10)} trackColor="gray.500" color="green.400" size="30px">
                  <CircularProgressLabel color={darkMode ? 'gray.50' : 'black'} fontSize="x-small">{Math.round(data.vote_average * 10)}%</CircularProgressLabel>
                </CircularProgress>

                {data.genres.map((genre) => (
                  <Box
                    as="span"
                    border="2px"
                    borderColor={darkMode ? 'gray.50' : 'gray.900'}
                    borderRadius={22}
                    px={2}
                    pt={0.35}
                    key={genre.id}
                  ><Text as="span" color={darkMode ? 'gray.50' : 'black'}>{genre.name}</Text>
                  </Box>
                ))}
              </Flex>
              {/*<Container p="0" maxW="50em">*/}
              <Text color={darkMode ? 'gray.50' : 'black'} mt={3} mb={2}>{data.overview}</Text>
              {/*</Container>*/}
              <Flex>
                <Text mr={2} color={darkMode ? 'gray.400' : 'black'}>
                  Starring:
                </Text>
                <Box w="100%" noOfLines={[4, 6, 6]}>
                  {
                    data.credits.cast.map((cast) => <Text as="span" key={cast.cast_id} color={darkMode ? 'gray.50' : 'black'}>{cast.name}, </Text>)
                  }
                </Box>
              </Flex>
            </Box>

          </Flex>

          {/*Movie Trailer*/}
          {data.videos?.results?.length > 0
            && (
              <Box mt={3}>
                <Text color={darkMode ? 'gray.50' : 'black'} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Trailer</Text>
                {
                  data.videos?.results?.filter((video) => video.type === 'Trailer')
                    .map((video) => (
                      <Box key={video.id} mb={2} h={{ base: '300px', md: '600px' }}>
                        <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name} width="100%" height="100%" allowFullScreen />
                      </Box>
                    ))
                }
              </Box>
            )}

          {/*Similar Movies*/}
          {isLoading
            ? (<CustomSpinner />)
            : (
              <Box>
                {
                  similarMovies.results.length > 0 && (
                    <>
                      <Text
                        color={darkMode ? 'gray.50' : 'black'}
                        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                      >
                        You May Also Like
                      </Text>
                      <Flex my={3}>

                        <Swiper
                          breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            480: { slidesPerView: 3, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 10 },
                            1024: { slidesPerView: 6, spaceBetween: 10 },
                          }}
                        >
                          {similarMovies.results.map((movie) => (
                            <SwiperSlide key={movie.id}>
                              <MovieCard movie={movie} />
                            </SwiperSlide>
                          ))}

                        </Swiper>
                      </Flex>
                    </>
                  )
                }
              </Box>
            )}

        </>
      )}

    </Flex>
  );
}

export default MovieDetails;
