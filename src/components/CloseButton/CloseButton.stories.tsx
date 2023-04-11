import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CloseButton } from './CloseButton';
import { CloseButtonProps } from 'react-bootstrap/CloseButton';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#eee' }],
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      options: ['none', 'white', 'primary'],
      control: 'select',
    },
  },
} as Meta;

const Template: Story<CloseButtonProps> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});

export const White = Template.bind({});

White.args = {
  variant: 'white',
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
