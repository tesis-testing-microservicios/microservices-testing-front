import { ChakraProvider } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

export const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

type Props = { queryClient?: QueryClient };

export const AllTheProviders: React.FC<PropsWithChildren<Props>> = ({
  queryClient = makeQueryClient(),
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>
        <ChakraProvider>{children}</ChakraProvider>
      </MemoryRouter>
    </QueryClientProvider>
  );
};
