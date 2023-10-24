import React from 'react';
import * as stories from './reports.stories';
import { composeStories } from '@storybook/testing-react';
import * as RTL from '../../test/rtl';

const { Default } = composeStories(stories);

it('<Reports />', () => {
  RTL.render(<Default />);
  RTL.screen.getByText('Reportes');
  RTL.screen.getByText(/Contenido de reportes/i);
});
