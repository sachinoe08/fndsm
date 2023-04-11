import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VerticalCard, VerticalCardProps } from './VerticalCard';

export default {
  title: 'Components/Card/VerticalCard',
  component: VerticalCard,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    imageUrl: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    className: {
      type: 'string',
    },
  },
  args: {
    imageUrl:
      'https://static.zennioptical.com/dev/image/site/order-process/add-ons/clip-ons/main.svg',
    title: 'Card title',
  },
} as Meta;
const Template: Story<VerticalCardProps> = (args) => <VerticalCard {...args} />;

export const Default = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ClassAndId = Template.bind({});
ClassAndId.args = {
  id: '121',
  className: 'class-name',
  onClick: (event: any) => {
    event.preventDefault();
    console.log(event.currentTarget.id);
  },
};
