import React from 'react';
import { render, screen } from '@testing-library/react';
import * as stories from './navbar.stories';
import { composeStories } from '@storybook/testing-react';

const { Default } = composeStories(stories);

it('renders Navbar component', () => {
  render(<Default />);
  const navbarTitle = screen.getByText(/Home/i);
  expect(navbarTitle).toBeInTheDocument();
  // Just example code
});
