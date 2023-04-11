import React from 'react';
import { Nav, NavProps } from './Nav';
import { Meta, Story } from '@storybook/react/types-6-0';

const link = 'https://www.zennioptical.com';

export default {
  title: 'Components/Nav',
  component: Nav,
  args: {
    groups: [
      {
        key: 1,
        items: [
          {
            key: 1,
            label: 'Page 1',
            link,
          },
          {
            key: 2,
            label: 'Page 2',
            link,
          },
          {
            key: 3,
            label: 'Page 3',
            active: true,
          },
        ],
      },
    ],
  },
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
  defaultActiveKey: '/home',
};

export const Vertical = Template.bind({});

Vertical.args = {
  defaultActiveKey: '/home',
  vertical: true,
};

export const GroupedWithTitle = Template.bind({});

GroupedWithTitle.args = {
  vertical: true,
  groups: [
    {
      key: 1,
      title: 'My Account',
      items: [
        { key: 1, label: 'Dashboard', link: '/myAccount/myDashBoard/' },
        { key: 2, label: 'Account Settings' },
      ],
    },
    { key: 2, title: 'Join Zenni Rewards', items: [{ key: 1, label: 'Sign Up' }] },
    {
      key: 3,
      title: 'Order Management',
      items: [
        { key: 1, label: 'My Orders | {{icon:truck}} Track My Order' },
        { key: 2, label: 'My Payments Methods' },
        { key: 3, label: 'My Address Book' },
      ],
    },
    {
      key: 4,
      title: 'Personalization',
      items: [
        { key: 1, label: 'My Prescription' },
        { key: 2, label: 'My Favorites' },
        { key: 3, label: 'My Address Book' },
        { key: 4, label: 'My TryOn' },
      ],
    },
    {
      key: 5,
      items: [
        { key: 1, label: 'Gift Card Balance' },
        { key: 2, label: 'Subscriptions' },
      ],
    },
  ],
  defaultActiveKey: '/myAccount/myDashBoard/',
};

export const GroupedWithSeparator = Template.bind({});

GroupedWithSeparator.args = {
  vertical: true,
  groups: [
    {
      key: 1,
      items: [
        {
          key: 1,
          label: 'Ordering',
          link,
        },
        {
          key: 2,
          label: 'Payment',
          link,
        },
      ],
    },
    {
      key: 2,
      separator: true,
      items: [
        {
          key: 1,
          label: 'Eyewear Care',
          link,
        },
        {
          key: 2,
          label: 'How To',
          link,
        },
      ],
    },
  ],
};
