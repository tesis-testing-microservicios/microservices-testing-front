import React from 'react';
import * as stories from './patterns.stories';
import { composeStories } from '@storybook/testing-react';
import * as RTL from '../../test/rtl';

const { Default } = composeStories(stories);

it('<Patterns />', () => {
  RTL.render(<Default />);
  RTL.screen.getByText('Patrones');
  RTL.screen.getByText(/Contenido de patrones/i);
});
