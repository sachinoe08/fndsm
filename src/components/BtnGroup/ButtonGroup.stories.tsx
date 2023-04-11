import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Group',
  items: [
    {
      key: '1',
      variant: 'primary',
      children: '1',
    },
    {
      key: '22',
      variant: 'primary',
      children: '2',
    },
    {
      key: '3',
      variant: 'primary',
      children: '3',
    },
  ],
};
