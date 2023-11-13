import { getMSWService } from '../src/mocks';
import { MainDecorator } from './main-decorator';

const msw = getMSWService();

msw.use();

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
};

export const decorators = [MainDecorator];

export default preview;
