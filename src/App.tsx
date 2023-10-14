import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './Layout';
import { BrowserRouter } from 'react-router-dom';

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
