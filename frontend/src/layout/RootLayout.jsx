import { Grid, GridItem, Show } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" h="100vh">
      <Show breakpoint="(min-width: 480px)">
        <GridItem
          as="aside"
          colSpan={{ base: 6, sm: 2, lg: 1, xl: 1 }}
          bg="gray.900"
          minHeight={{ lg: '100vh' }}
          p={{ base: '10px', lg: '10px' }}
        >
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem
        as="main"
        colSpan={{ base: 6, sm: 4, lg: 5, xl: 5 }}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
