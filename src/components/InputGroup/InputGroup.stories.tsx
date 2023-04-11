import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { InputGroup, InputGroupProps } from './InputGroup';
import { FormControl } from '../FormControl';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<InputGroupProps> = (args) => <InputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <InputGroup.Text id="inputGroup-sizing-sm">Text</InputGroup.Text>
      <FormControl placeholder="Placeholder" />
    </>
  ),
};
