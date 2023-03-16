import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';

import { store } from './app/store';

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
    <Provider store={store}>
      <ChakraProvider>
        <App theme={theme} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
