import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Navbar } from './navbar';

export default {
  title: 'Example/Navbar',
  component: Navbar,
};

const Template = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
