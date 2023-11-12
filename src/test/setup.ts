import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from '../../.storybook/preview'; // path of your preview.js file
import { server } from '../mocks/server';
import { setLogger } from 'react-query';
import '@testing-library/jest-dom';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

setGlobalConfig(globalStorybookConfig);

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});
