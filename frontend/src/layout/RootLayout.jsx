import { Grid, GridItem, Show } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function RootLayout() {
  return (
    <Grid templateColumns="repeat(12, 1fr)" bg="gray.50" h="100vh">
      <Show breakpoint="(min-width: 429px)">
        <GridItem
          as="aside"
          colSpan={{ base: 3, lg: 3, xl: 2 }}
          bg="gray.800"
          minHeight={{ lg: '100vh' }}
          p={{ base: '10px', lg: '20px' }}

        >
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }}
        p="40px"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
