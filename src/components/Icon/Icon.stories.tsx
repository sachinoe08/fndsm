import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const arrowDownIcon = Template.bind({});
arrowDownIcon.args = {
  icon: 'user',
  size: '3x',
  theme: 'primary',
};
