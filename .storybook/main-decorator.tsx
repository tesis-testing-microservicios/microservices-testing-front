import * as React from 'react';

import { DecoratorFn } from '@storybook/react';
import { AllTheProviders } from './../src/test/index';
import { getMSWService } from '../src/mocks';

const msw = getMSWService();

export const MainDecorator: DecoratorFn = (Story, options) => {
  if (options.parameters?.msw) {
    msw.use(...options.parameters.msw(options.args));
  }
  return (
    <AllTheProviders queryClient={options.args.queryClient}>
      <Story {...options} />
    </AllTheProviders>
  );
};
