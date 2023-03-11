import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const theme = extendTheme({ breakpoints });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App theme={theme} />
    </ChakraProvider>
  </React.StrictMode>,
);
