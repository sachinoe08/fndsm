import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Placeholder, PlaceholderProps, PlaceholderButton } from './Placeholder';
import { PlaceholderButtonProps } from 'react-bootstrap/PlaceholderButton';
import { Row } from 'react-bootstrap';

export default {
  title: 'Components/Placeholder',
  component: Placeholder,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#eee' }],
    },
  },
  argTypes: {
    bg: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: 'select',
    },
    size: {
      options: ['xs', 'sm', 'lg'],
      control: 'select',
    },
    animation: {
      options: ['glow', 'wave', 'none'],
      control: 'select',
    },
  },
} as Meta;

const Template: Story<PlaceholderProps> = (args) => (
  <Row style={{ width: '100vw' }}>
    <Placeholder {...args} />
  </Row>
);

const TemplateButton: Story<PlaceholderButtonProps> = (args) => (
  <Row style={{ width: '100vw' }}>
    <PlaceholderButton {...args} />
  </Row>
);

export const Animations = Template.bind({});
Animations.args = {
  as: 'div',
  xs: 12,
  style: { backgroundColor: 'transparent' },
  items: [
    {
      key: 1,
      as: 'div',
      xs: 12,
      animation: 'glow',
      size: 'lg',
      bg: 'primary',
    },
    {
      key: 2,
      as: 'div',
      xs: 12,
      animation: 'wave',
      size: 'lg',
      bg: 'primary',
      style: { marginTop: '10px' },
    },
  ],
};

export const Width = Template.bind({});
Width.args = {
  as: 'div',
  animation: 'wave',
  xs: 12,
  items: [
    {
      key: 1,
      xs: 12,
    },
    {
      key: 2,
      xs: 6,
    },
    {
      key: 3,
      xs: 4,
      style: { marginLeft: '10px' },
    },
    {
      key: 4,
      xs: 1,
      style: { marginLeft: '10px' },
    },
  ],
};

export const Sizes = Template.bind({});
Sizes.args = {
  as: 'div',
  animation: 'wave',
  items: [
    {
      key: 1,
      xs: 12,
      size: 'lg',
    },
    {
      key: 2,
      xs: 12,
    },
    {
      key: 3,
      xs: 12,
      size: 'sm',
    },
    {
      key: 4,
      xs: 12,
      size: 'xs',
    },
  ],
};

export const Colors = Template.bind({});
Colors.args = {
  as: 'div',
  animation: 'wave',
  items: [
    {
      key: 1,
      xs: 12,
      size: 'sm',
      bg: 'primary',
    },
    {
      key: 2,
      xs: 12,
      size: 'sm',
      bg: 'secondary',
    },
    {
      key: 3,
      xs: 12,
      size: 'sm',
      bg: 'success',
    },
    {
      key: 4,
      xs: 12,
      size: 'sm',
      bg: 'danger',
    },
    {
      key: 5,
      xs: 12,
      size: 'sm',
      bg: 'warning',
    },
    {
      key: 6,
      xs: 12,
      size: 'sm',
      bg: 'info',
    },
    {
      key: 7,
      xs: 12,
      size: 'sm',
      bg: 'light',
    },
    {
      key: 8,
      xs: 12,
      size: 'sm',
      bg: 'dark',
    },
  ],
};

export const Button = TemplateButton.bind({});
Button.args = {
  xs: 4,
};

export const Mixed = Template.bind({});
Mixed.args = {
  as: 'div',
  xs: 12,
  animation: 'wave',
  items: [
    {
      key: 1,
      as: 'div',
      xs: 8,
      size: 'lg',
      bg: 'primary',
    },
    {
      key: 2,
      as: 'div',
      xs: 6,
      size: 'lg',
      bg: 'primary',
      style: { marginTop: '10px' },
    },
    {
      key: 3,
      type: 'button',
      xs: 3,
      size: 'sm',
      bg: 'primary',
      style: { marginTop: '10px', display: 'block' },
    },
  ],
};
