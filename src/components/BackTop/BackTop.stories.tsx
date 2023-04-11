import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BackTop, BackTopProps } from './BackTop';

export default {
  title: 'Components/BackTop/BackTop',
  component: BackTop,
} as Meta;

const Template: Story<BackTopProps> = (args) => {
  const nweArr = Array.from(new Array(100)).fill('hello world');

  return (
    <>
      {nweArr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <BackTop {...args} />
    </>
  );
};

export const BackTopExample = Template.bind({});

BackTopExample.args = {};
BackTopExample.storyName = 'BackTop';
