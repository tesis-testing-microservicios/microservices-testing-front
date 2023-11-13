import * as React from 'react';

import { DecoratorFn, Parameters } from '@storybook/react';
import { AllTheProviders } from './../src/test/index';
import { getMSWService } from '../src/mocks';
import { AppProps } from '../src/App';

const msw = getMSWService();

export const MainDecorator: DecoratorFn = (Story, options) => {
  const { args, parameters } = options as {
    args: AppProps;
    parameters: Parameters;
  };

  msw.use(...(parameters?.msw?.(args) ?? []));

  return (
    <AllTheProviders queryClient={options.args.queryClient}>
      <Story {...options} />
    </AllTheProviders>
  );
};
