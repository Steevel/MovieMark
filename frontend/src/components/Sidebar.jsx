import { Box, Flex, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { Box, Flex, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/MMLogo SVG.svg';
import { useGetGenresQuery } from '../services/TMDB';
import { useGetGenresQuery } from '../services/TMDB';

function Sidebar() {
  const { data, isFetching } = useGetGenresQuery();
  const [activeGenre, setActiveGenre] = useState(0);

  return (
    <>
      <Box boxSize="sm" w="100%" h="max-content">
        <Image src={logo} alt="Moviemark Logo" mt={6} mb={4} />
      </Box>
      <List
        color="white"
        fontSize="1.2rem"
        spacing={1}
        maxHeight="82vh"
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
      >
        {
          isFetching ? (
            <Flex h="80vh" w="100%" alignItems="center" justifyContent="center">
              <Spinner
                thickness="4px"
                speed="1s"
                emptyColor="gray.500"
                color="white"
                size="xl"
              />
            </Flex>

          ) : (data.genres.map(({ id, name }) => (
            <NavLink
              to="/"
              key={id}
              onClick={() => setActiveGenre(id)}
            >
              <ListItem
                _hover={{ bg: 'red.600' }}
                sx={activeGenre === id ? { bg: 'red.600' } : (null)}
                p={1.5}
                color="gray.50"
                fontSize={18}
              >
                {/*<ListIcon as="" />*/}
                {name}
              </ListItem>
            </NavLink>
          )))

        }
        {
          isFetching ? (
            <Flex h="80vh" w="100%" alignItems="center" justifyContent="center">
              <Spinner
                thickness="4px"
                speed="1s"
                emptyColor="gray.500"
                color="white"
                size="xl"
              />
            </Flex>

          ) : (data.genres.map(({ id, name }) => (
            <NavLink
              to="/"
              key={id}
              onClick={() => setActiveGenre(id)}
            >
              <ListItem
                _hover={{ bg: 'red.600' }}
                sx={activeGenre === id ? { bg: 'red.600' } : (null)}
                p={1.5}
                color="gray.50"
                fontSize={18}
              >
                {/*<ListIcon as="" />*/}
                {name}
              </ListItem>
            </NavLink>
          )))

        }
      </List>
    </>
  );
}

export default Sidebar;
