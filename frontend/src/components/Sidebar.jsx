import { Box, Image, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/MMLogo SVG.svg';

const data = {
  genre: [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Science Friction',
    'TV Movie',
    'Thriller',
    'War',
    'Western',
  ],
};
function Sidebar() {
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
        {data.genre.map((genreName) => (
          <NavLink to="/">
            <ListItem
              _hover={{ bg: 'red.600' }}
              p={1.5}
              color="gray.50"
              fontSize={18}
            >
              {/*<ListIcon as="" />*/}
              {genreName}
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
