import React from 'react';
import * as stories from './navbar.stories';
import { composeStories } from '@storybook/testing-react';
import * as RTL from '../../test/rtl';

const { Default } = composeStories(stories);

it('<Navbar />', () => {
  RTL.render(<Default />);
  RTL.screen.getByText(/Componentes/i);
});
