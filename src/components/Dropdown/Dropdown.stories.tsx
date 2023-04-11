import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Dropdown, DropdownProps } from './Dropdown';
import { Nav } from '../Nav';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#eee' }],
    },
  },
  argTypes: {
    variant: {
      options: ['default'],
      control: { type: 'select' },
    },
    disabled: { type: 'boolean' },
  },
  args: {
    title: 'Choose an option',
    items: [
      {
        key: 1,
        title: 'Option 1',
      },
      {
        key: 2,
        title: 'Option 2',
      },
    ],
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <>
    <Dropdown {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {
  variant: 'default',
};

export const WithReactElement = Template.bind({});

WithReactElement.args = {
  variant: 'default',
  title: 'Dashboard',
  items: (
    <Nav
      vertical={true}
      groups={[
        {
          key: 1,
          title: 'My Account',
          items: [
            {
              key: 1,
              label: 'Dashboard',
              link: '/myAccount/myDashBoard/',
            },
            {
              key: 2,
              label: 'Account Settings',
            },
          ],
        },
        {
          key: 2,
          title: 'Join Zenni Rewards',
          items: [
            {
              key: 1,
              label: 'Sign Up',
            },
          ],
        },
      ]}
      defaultActiveKey="/myAccount/myDashBoard/"
    />
  ),
};
