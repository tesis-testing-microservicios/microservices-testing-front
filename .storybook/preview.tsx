import { initialize, mswLoader } from 'msw-storybook-addon';
import { MainDecorator } from './main-decorator';

// Initialize MSW
initialize({ onUnhandledRequest: 'bypass' });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export const decorators = [MainDecorator];

export default preview;
