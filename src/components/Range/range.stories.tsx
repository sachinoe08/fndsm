import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Range, RangeProps } from './Range';

export default {
  title: 'Components/Range/Range',
  component: Range,
} as Meta;

const DefaultData = {
  value: [0, 20],
};

const Template: Story<RangeProps> = (args) => (
  <>
    <Range {...args} />
  </>
);

export const RangeExample = Template.bind({});

RangeExample.args = { ...DefaultData };
RangeExample.storyName = 'Range';
