import {
  render as RTLRender,
  RenderOptions,
  render,
  waitFor,
} from '@testing-library/react';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { makeQueryClient } from '.';

export * from '@testing-library/react';

export const renderStory = (
  ui: React.ReactElement<{ queryClient?: QueryClient }>,
  options: RenderOptions = {},
) => {
  const queryClient: QueryClient = ui.props.queryClient ?? makeQueryClient();
  const clonedUi = React.cloneElement(ui, { queryClient });
  return {
    ...render(clonedUi, options),
    queryClient,
    waitForFetchingToFinish: makeWaitForFetchingToFinish(queryClient),
  };
};

const makeWaitForFetchingToFinish = (queryClient?: QueryClient) => async () => {
  if (!queryClient) {
    throw Error('No query client provided');
  }
  return await waitFor(() => {
    expect(queryClient.isFetching()).toEqual(0);
  });
};
