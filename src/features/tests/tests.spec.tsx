import React from 'react';
import * as stories from './tests.stories';
import { composeStories } from '@storybook/testing-react';
import * as RTL from '../../test/rtl';

const { Default } = composeStories(stories);

it('<Tests />', () => {
  RTL.render(<Default />);
  RTL.screen.getByText('Tests');
  RTL.screen.getByText(/Contenido de tests/i);
});
