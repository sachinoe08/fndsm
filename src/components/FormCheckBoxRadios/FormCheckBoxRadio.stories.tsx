import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { FormCheck, FormCheckProps } from './FormCheckBoxRadio';

export default {
  title: 'Components/FormCheckboxRadio',
  component: FormCheck,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#eee' }],
    },
  },
  argTypes: {
    type: {
      options: ['radio', 'checkbox'],
      control: { type: 'select' },
    },
    disabled: { type: 'boolean' },
    isInvalid: { type: 'boolean' },
  },
  args: {
    label: 'label',
    id: 'checkboxId',
  },
} as Meta;

const Template: Story<FormCheckProps> = (args) => <FormCheck {...args} />;

export const CheckDefault = Template.bind({});

export const CheckError = Template.bind({});
CheckError.args = {
  isInvalid: true,
};

export const CheckDisabled = Template.bind({});
CheckDisabled.args = {
  disabled: true,
};

export const RadioDefault = Template.bind({});
RadioDefault.args = {
  type: 'radio',
};

export const RadioError = Template.bind({});
RadioError.args = {
  type: 'radio',
  isInvalid: true,
};

export const RadioDisabled = Template.bind({});
RadioDisabled.args = {
  type: 'radio',
  disabled: true,
};
