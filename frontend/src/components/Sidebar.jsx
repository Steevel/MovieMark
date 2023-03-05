import { Box, Image, List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/moviemark-logo.png';

const data = { genre: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Friction', 'TV Movie', 'Thriller', 'War', 'Western'] };
function Sidebar() {
  return (
    <>
      <Box boxSize="sm" w="100%" h="max-content">
        <Image
          src={logo}
          alt="Moviemark Logo"
          mb={4}
        />
      </Box>
      <List color="white" fontSize="1.2rem" spacing={4} maxHeight="82vh" overflowY="scroll">
        {data.genre.map((genreName) => (
          <ListItem>
            <NavLink to="/">
              <ListIcon as="" color="white" />
              {genreName}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </>

  );
}

export default Sidebar;
