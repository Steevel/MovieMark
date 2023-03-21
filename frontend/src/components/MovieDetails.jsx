import { Box, CircularProgress, CircularProgressLabel, Flex, Image, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../services/TMDB';

function MovieDetails() {
  const { id } = useParams();
  const darkMode = useSelector((state) => state.mode.darkMode);
  const { data, isFetching } = useGetMovieQuery(id);
  //console.log('Movie Details: ', data, isFetching);

  return (
    <Flex w="100%" h="92vh" overflowY="scroll" bg={darkMode ? 'gray.900' : 'gray.50'} p={3} direction={{ base: 'column', md: 'row' }}>
      {isFetching ? ('Loading...') : (
        <Flex gap={3} direction={{ base: 'column', lg: 'row' }}>
          <Flex justifyContent="center">
            <Image
              maxW={{ base: '100vw', md: '30vh' }}
              maxH={{ base: '60vh', md: '50vh' }}
              borderRadius="md"
              src={data.poster_path
                ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                : 'https://fakeimg.pl/200x300/'}
            />
          </Flex>
          <Box>
            <Text color={darkMode ? 'white' : 'black'} fontSize={{ base: '4xl', md: '5xl' }}>{data.title}
            </Text>

            <Box>
              <Text color={darkMode ? 'white' : 'black'} as="i">{data?.tagline}</Text>
            </Box>

            <Flex gap={2} mt={2} flexWrap="wrap">

              <CircularProgress value={Math.round(data.vote_average * 10)} trackColor="gray.500" color="green.400" size="30px">
                <CircularProgressLabel color={darkMode ? 'white' : 'black'} fontSize="x-small">{Math.round(data.vote_average * 10)}%</CircularProgressLabel>
              </CircularProgress>

              {data.genres.map((genre) => (
                <Box
                  as="span"
                  border="2px"
                  borderColor={darkMode ? 'white' : 'gray.900'}
                  borderRadius={22}
                  px={2}
                  pt={0.35}
                  key={genre.id}
                ><Text as="span" color={darkMode ? 'white' : 'black'}>{genre.name}</Text>
                </Box>
              ))}
            </Flex>
            <Text color={darkMode ? 'white' : 'black'} mt={4}>{data.overview}</Text>

          </Box>
        </Flex>
      )}

    </Flex>
  );
}

export default MovieDetails;
