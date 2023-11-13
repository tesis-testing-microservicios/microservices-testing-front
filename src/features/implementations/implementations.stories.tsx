import { StoryObj } from '@storybook/react';
import { Implementations } from './implementations';
import { rest } from 'msw';

type Args = {};

export default {
  component: Implementations,
  parameters: {
    msw: (_args: unknown) => {
      return [
        rest.get('*/users', (_req, res, ctx) => {
          return res(
            ctx.json({
              company: '@process-street',
            }),
          );
        }),
      ];
    },
  },
};

type Story = StoryObj<Args>;

export const Default: Story = {};
