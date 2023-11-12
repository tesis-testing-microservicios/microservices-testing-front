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

// export const render = (
//   ui: React.ReactElement,
//   { ...options }: RenderOptions = {},
// ) => {
//   window.HTMLElement.prototype.scrollIntoView = jest.fn();

//   console.log({ uiProps: ui.props });

//   const queryClient: QueryClient =
//     ui.props.queryClient ??
//     new QueryClient({
//       defaultOptions: {
//         queries: {
//           retry: false,
//         },
//       },
//     });

//   const wrappedUI = React.cloneElement(ui, { queryClient });

//   // const wrappedUI = (
//   //   <QueryClientProvider client={queryClient}>
//   //     {React.cloneElement(ui, { queryClient })}
//   //   </QueryClientProvider>
//   // );

//   return {
//     ...RTLRender(wrappedUI, {
//       ...options,
//       wrapper: ({ children }) =>
//         options.wrapper ? (
//           <options.wrapper>{children}</options.wrapper>
//         ) : (
//           children
//         ),
//     }),
//     queryClient,
//     waitForFetchingToFinish: makeWaitForFetchingToFinish(queryClient),
//   };
// };

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
  console.log('waiting for fetching to finish');
  console.log({ queryClient: queryClient.isFetching() });
  return await waitFor(() => {
    expect(queryClient.isFetching()).toEqual(0);
  });
};
