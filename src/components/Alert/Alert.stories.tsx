import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'light',
        'dark',
        'info',
        'purple',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

const renderElement = () => {
  return (
    <>
      <h2>Header text</h2>
      <p>Aww yeah, you successfully read this important alert message.</p>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: renderElement(),
  show: true,
  variant: 'primary',
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  children: renderElement(),
  show: true,
  dismissible: true,
  variant: 'secondary',
};
