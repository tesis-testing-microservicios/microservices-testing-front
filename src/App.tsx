import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './features/layout';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
