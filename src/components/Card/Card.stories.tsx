import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
  title: 'Components/Card/Default',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#eee' }],
    },
  },
  argTypes: {
    bg: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'],
      control: 'select',
    },
    border: {
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
        'light',
        'pink',
      ],
      control: 'select',
    },
    borderRadius: {
      options: ['sm', 'md', 'circle', 'none'],
      control: 'select',
    },
    boxShadow: {
      control: 'boolean',
    },
    noPadding: {
      control: 'boolean',
    },
    borderOnHover: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const imageBody = () => {
  return (
    <>
      <img
        style={{ width: '400px' }}
        src="https://www.zennioptical.com/marketing/hp/images/featured-categories/eyeglasses-180.png?im=Resize=(180)"
      />
      <h5 style={{ color: '#007b8f', marginTop: '10px', textAlign: 'center' }}>Eyeglasses</h5>
    </>
  );
};

const messageBody = (color: string) => {
  return (
    <>
      <p style={{ color: color, textAlign: 'center' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>FREE</span> U.S. Standart Shipping
      </p>
    </>
  );
};

const messageBody2 = (color: string) => {
  return (
    <>
      <p
        style={{
          color: color,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          margin: '0',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>FREE</span>
        U.S. Standart Shipping
      </p>
    </>
  );
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: imageBody(),
};

export const PrimaryBackground = Template.bind({});

PrimaryBackground.args = {
  children: messageBody('white'),
  bg: 'primary',
  style: { padding: '0 5px' },
};

export const PrimaryBorder = Template.bind({});

PrimaryBorder.args = {
  children: imageBody(),
  border: 'primary',
};

export const NoBorder = Template.bind({});

NoBorder.args = {
  children: imageBody(),
  border: 'none',
};

export const BoxShadow = Template.bind({});

BoxShadow.args = {
  children: imageBody(),
  boxShadow: true,
};
export const Disabled = Template.bind({});

Disabled.args = {
  children: imageBody(),
  disabled: true,
};

export const NoPadding = Template.bind({});

NoPadding.args = {
  children: imageBody(),
  noPadding: true,
};

export const Circle = Template.bind({});

Circle.args = {
  children: messageBody2('#007b8f'),
  borderRadius: 'circle',
};
