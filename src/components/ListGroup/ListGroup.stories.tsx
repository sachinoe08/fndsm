import React from 'react';

import { ListGroup, ListGroupProps } from './ListGroup';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
  argTypes: {
    listStyle: {
      options: ['-', 'button', 'tab'],
      control: 'select',
    },
  },
  args: {
    items: [
      { key: 1, children: 'Red', active: true },
      { key: 2, children: 'Green' },
      { key: 3, children: 'Blue' },
    ],
  },
};

const Template: Story<ListGroupProps> = (args) => <ListGroup {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {};

export const Horizontal = Template.bind({});
Horizontal.args = {
  horizontal: true,
};

export const ButtonStyle = Template.bind({});
ButtonStyle.args = {
  horizontal: true,
  listStyle: 'button',
  items: [
    { key: 1, variant: 'primary', children: '<', active: true },
    { key: 2, variant: 'danger', children: '+' },
    { key: 3, variant: 'dark', children: '-' },
    { key: 4, variant: 'success', children: '>' },
  ],
};

export const TabStyle = Template.bind({});
TabStyle.args = {
  horizontal: true,
  listStyle: 'tab',
};

export const TabStyleCustomHtml = Template.bind({});
TabStyleCustomHtml.args = {
  horizontal: true,
  listStyle: 'tab',
  items: [
    {
      key: 1,
      active: true,
      children: (
        <div style={{ margin: '0 10px' }}>
          <img src="https://static.zennioptical.com/production/products/general/20/86/208612-eyeglasses-front-view.jpg?im=Resize,width=65" />
          <p style={{ textAlign: 'center' }}>Navy</p>
        </div>
      ),
    },
    {
      key: 2,
      children: (
        <div style={{ margin: '0 10px' }}>
          <img src="https://static.zennioptical.com/production/products/general/20/86/208612-eyeglasses-front-view.jpg?im=Resize,width=65" />
          <p style={{ textAlign: 'center' }}>Gray</p>
        </div>
      ),
    },
  ],
};
