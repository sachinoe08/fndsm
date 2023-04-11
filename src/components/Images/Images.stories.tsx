import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Image } from './Images';
import { ImageProps } from 'react-bootstrap/Image';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  src: 'https://static.zennioptical.com/dev/image/site/logo/zenni-logo.png',
};
