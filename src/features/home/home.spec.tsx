import React from 'react';
import * as stories from './home.stories';
import { composeStories } from '@storybook/react';
import * as RTL from '../../test/rtl';

const { Default } = composeStories(stories);

it('<Home />', () => {
  RTL.render(<Default />);
  RTL.screen.getByText(/Welcome to My App/i);
  RTL.screen.getByText(
    /This is a simple example of how to add content to your app./i,
  );
});
