import { Box, Flex, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../assets/MMLogo SVG.svg';
import { selectedGenre } from '../features/movieSlice';
import { useGetGenresQuery } from '../services/TMDB';

function Sidebar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);

  const { data, isFetching } = useGetGenresQuery();
  const [activeGenre, setActiveGenre] = useState(28);

  const handleClick = (id) => {
    setActiveGenre(id);
    dispatch(selectedGenre(id));
  };

  return (
    <>
      <Box boxSize="sm" w="100%" h="max-content">
        <Image src={logo} alt="Moviemark Logo" mt={1} mb={4} />
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
            background: 'gray.500',
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
              onClick={() => handleClick(id)}
            >
              <ListItem
                _hover={darkMode ? { bg: 'red.400', color: 'white' } : { bg: 'red.100', color: 'black' }}
                sx={activeGenre === id ? { bg: 'red.600', color: 'white' } : (null)}
                p={1.5}
                color={darkMode ? 'white' : 'black'}
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
