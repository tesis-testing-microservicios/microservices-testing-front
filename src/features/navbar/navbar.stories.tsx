import React from 'react';
import { StoryObj } from '@storybook/react';
import { Navbar } from './navbar';

type Args = {};

export default {
  title: 'Example/Navbar',
  component: Navbar,
};

type Story = StoryObj<Args>;

export const Default: Story = {
  args: {},
};
