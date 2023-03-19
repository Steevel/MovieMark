import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/index';

function RootLayout() {
  const darkMode = useSelector((state) => state.mode.darkMode);

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" h="100vh">
      <Show breakpoint="(min-width: 480px)">
        <GridItem
          as="aside"
          colSpan={{ base: 6, sm: 1 }}
          bg={darkMode ? 'gray.900' : 'gray.50'}
          minHeight={{ lg: '100vh' }}
          p={{ base: '10px' }}
          borderRightWidth="2px"
          borderColor={darkMode ? 'gray.600' : 'gray.400'}
        >
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem
        as="main"
        colSpan={{ base: 6, sm: 5 }}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
