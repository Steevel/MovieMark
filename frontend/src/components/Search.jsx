import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchQuery } from '../features/movieSlice';

function Search({ darkMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (location.pathname !== '/') {
        navigate('/');
      }
      dispatch(searchQuery(query));
      setQuery('');
    }
  };

  return (
    <Box w={{ base: '80%', md: '60%', lg: '35%' }}>
      <InputGroup size="sm">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          borderRadius="5px"
          placeholder="Search any movie..."
          focusBorderColor="gray.50"
          _placeholder={darkMode ? { color: 'gray.500' } : { color: 'gray.200' }}
          color={darkMode ? 'gray.300' : 'gray.50'}
        />
        <InputLeftElement
          cursor="pointer"
          color={darkMode ? 'gray.300' : 'gray.50'}
        >
          <FaSearch color={darkMode ? 'gray.300' : 'gray.50'} />
        </InputLeftElement>
      </InputGroup>
    </Box>
  );
}

export default Search;
