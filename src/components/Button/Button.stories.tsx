import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Spinner } from 'react-bootstrap';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'info',
        'light',
        'dark',
        'outline-primary',
        'outline-secondary',
        'outline-success',
        'outline-warning',
        'outline-danger',
        'outline-info',
        'outline-light',
        'outline-dark',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    disabled: { type: 'boolean' },
    textUppercase: { type: 'boolean' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button tabIndex={0} {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  variant: 'primary',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: (
    <>
      <Spinner animation={'border'} size="sm" className="me-1" />
      Loading
    </>
  ),
  variant: 'primary',
  disabled: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <span className="me-2">Button with Icon</span>
      <FontAwesomeIcon icon={faAngleRight} className="fa-1x" />
    </>
  ),
  variant: 'primary',
};
