import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './features/layout';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

export type AppProps = { queryClient?: QueryClient };

export const App: React.FC<AppProps> = ({
  queryClient: queryClientOverride = queryClient,
}) => {
  return (
    <QueryClientProvider client={queryClientOverride}>
      <BrowserRouter>
        <ChakraProvider>
          <Layout />
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
