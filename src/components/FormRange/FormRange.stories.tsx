import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { FormRange } from './FormRange';

export default {
  title: 'Components/FormRange',
  component: FormRange,
} as Meta;

const Template: Story = (args) => <FormRange {...args} />;

export const Default = Template.bind({});
