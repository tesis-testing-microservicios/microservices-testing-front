import React from 'react';
import { MemoryRouter } from 'react-router-dom';

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

export const decorators = [
  Story => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];

export default preview;
