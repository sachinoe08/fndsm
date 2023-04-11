import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Toast, ToastProps } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    hideHeader: {
      control: 'boolean',
    },
    isActive: {
      control: 'boolean',
    },
    autoHide: {
      control: 'boolean',
    },
    delay: {
      control: 'number',
    },
  },
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

const commonAttributes = {
  toastTitle: 'Toast Title',
  toastBody: 'This is the toast body',
  isActive: true,
};

export const Default = Template.bind({});

Default.args = {
  ...commonAttributes,
};
