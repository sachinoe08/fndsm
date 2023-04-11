import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#eee' }],
    },
  },
  argTypes: {
    border: {
      control: 'boolean',
    },
    bg: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'],
      control: 'select',
    },
    text: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'],
      control: 'select',
    },
    borderRadius: {
      options: ['sm', 'md', 'none'],
      control: 'select',
    },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args}>Title</Badge>;

export const TextPrimary = Template.bind({});

TextPrimary.args = {
  bg: 'light',
  text: 'primary',
  border: true,
};

export const NoBorder = Template.bind({});

NoBorder.args = {
  bg: 'light',
  text: 'primary',
};

export const BackgroundPrimary = Template.bind({});

BackgroundPrimary.args = {
  bg: 'primary',
  text: 'light',
};

export const BorderRadius = Template.bind({});

BorderRadius.args = {
  bg: 'primary',
  text: 'light',
  borderRadius: 'sm',
};
