import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { FormControl, FormControlProps } from './FormControl';

export default {
  title: 'Components/FormControl',
  component: FormControl,
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'select' },
    },
    as: {
      options: ['input', 'textarea'],
      control: { type: 'select' },
    },
    disabled: { type: 'boolean' },
    required: { type: 'boolean' },
    isInvalid: { type: 'boolean' },
    floatingLabel: { type: 'boolean' },
    message: { type: 'string' },
  },
  args: {
    placeholder: 'Form Label',
  },
} as Meta;

const Template: Story<FormControlProps> = (args) => <FormControl {...args} />;

export const NotFloatingLabel = Template.bind({});
NotFloatingLabel.args = {
  floatingLabel: false,
};

export const Default = Template.bind({});
Default.args = {
  required: false,
};

export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
  required: true,
};

export const Valid = Template.bind({});
Valid.args = {
  isValid: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  isInvalid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  message: 'Field required',
};

export const FileInput = Template.bind({});
FileInput.args = {
  type: 'file',
};

export const Password = Template.bind({});
Password.args = {
  required: true,
  type: 'password',
  showLabel: 'Show',
  hideLabel: 'Hide',
};
