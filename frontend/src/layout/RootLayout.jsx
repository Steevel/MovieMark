import { Grid, GridItem, Show } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../components/index';

function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" h="100vh">
      <Show breakpoint="(min-width: 480px)">
        <GridItem
          as="aside"
          colSpan={{ base: 6, sm: 1 }}
          bg="gray.900"
          minHeight={{ lg: '100vh' }}
          p={{ base: '10px' }}
          sx={{
            'box-shadow': '3px 0px 5px 0px rgba(0,0,0,0.34)',
            '-webkit-box-shadow': '3px 0px 5px 0px rgba(0,0,0,0.34)',
            '-moz-box-shadow': '3px 0px 5px 0px rgba(0,0,0,0.34)',
          }}
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
