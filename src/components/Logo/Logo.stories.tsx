import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Logo } from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const LogoExample = Template.bind({});
LogoExample.args = {
  eleType: 'a',
};
