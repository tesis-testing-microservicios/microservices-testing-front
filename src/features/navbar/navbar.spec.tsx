import React from 'react';
import { screen } from '@testing-library/react';
import * as stories from './navbar.stories';
import { composeStories } from '@storybook/testing-react';
import * as RTL from '../../test/rtl';

const { Default } = composeStories(stories);

it('renders Navbar component', () => {
  RTL.render(<Default />);
  screen.getByText(/Componentes/i);
  // Just example code
});
