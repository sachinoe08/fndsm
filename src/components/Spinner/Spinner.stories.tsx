import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner, SpinnerProps } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark', 'info'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<SpinnerProps> = (args) => <Spinner {...args} />;
Default.args = {
  variant: 'primary',
  animation: 'border',
  size: 'sm',
};

export const Squared: Story<SpinnerProps> = (args) => <Spinner {...args} />;
Squared.args = {
  variant: 'primary',
  animation: 'border',
  size: 'sm',
  squared: true,
};
