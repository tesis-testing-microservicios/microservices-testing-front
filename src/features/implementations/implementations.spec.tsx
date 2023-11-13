import React from 'react';
import * as stories from './implementations.stories';
import { composeStories } from '@storybook/testing-react';
import * as RTL from '../../test/rtl';

const { Default } = composeStories(stories);

it('<Implementations />', async () => {
  const { waitForFetchingToFinish } = RTL.renderStory(<Default />);

  RTL.screen.getByText('Implementaciones');
  RTL.screen.getByText(/Contenido de implementaciones/i);

  await waitForFetchingToFinish();

  RTL.screen.findByText('@process-street');
});
