import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { FormSelect, FormSelectProps } from './FormSelect';

export default {
  title: 'Components/FormSelect',
  component: FormSelect,
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
  },
  args: {
    placeholder: 'Select Form Label',
    children: (
      <>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </>
    ),
  },
} as Meta;

const Template: Story<FormSelectProps> = (args) => (
  <FormSelect style={{ width: '200px' }} {...args} />
);

export const NotFloatingLabel = Template.bind({});
NotFloatingLabel.args = {
  floatingLabel: false,
};

export const Default = Template.bind({});

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
