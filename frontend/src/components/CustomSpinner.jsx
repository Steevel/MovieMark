import { Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function CustomSpinner() {
  const darkMode = useSelector((state) => state.mode.darkMode);

  return (
    <Spinner
      thickness="4px"
      speed="1s"
      emptyColor={darkMode ? 'gray.500' : 'gray.300'}
      color={darkMode ? 'white' : 'red.600'}
      size="xl"
    />
  );
}

export default CustomSpinner;
