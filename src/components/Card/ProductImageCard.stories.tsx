import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProductImageCard, ProductImageCardProps } from './ProductImageCard';

export default {
  title: 'Components/Card/ProductImageCard',
  component: ProductImageCard,
  argTypes: {
    withCounter: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    featured: {
      control: 'boolean',
    },
    title: {
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
    price: {
      type: 'number',
    },
    promoText: {
      type: 'string',
    },
    freeText: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    className: {
      type: 'string',
    },
    count: {
      type: 'number',
    },
    minCount: {
      type: 'number',
    },
    maxCount: {
      type: 'number',
    },
    currencyCode: {
      options: ['CAD', 'USD'],
      control: 'select',
    },
    locale: {
      options: ['en-US'],
      control: 'select',
    },
    borderOnHover: {
      type: 'boolean',
    },
  },
  args: {
    title: 'Label',
    promoText: 'Promo Text goes here',
    price: 12.7,
    count: 2,
    freeText: 'FREE',
    borderOnHover: true,
    imageUrl:
      'https://static.zennioptical.com/dev/image/site/order-process/add-ons/clip-ons/solid/gray.png',
  },
} as Meta;
const Template: Story<ProductImageCardProps> = (args) => <ProductImageCard {...args} />;

export const Default = Template.bind({});

export const WithCounter = Template.bind({});
WithCounter.args = {
  withCounter: true,
  minCount: 0,
  maxCount: 5,
  borderOnHover: false,
};

export const Featured = Template.bind({});
Featured.args = {
  featured: true,
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

export const OnClick = Template.bind({});
OnClick.args = {
  onClick: (event) => {
    event.preventDefault();
    console.log('Hello');
  },
};

export const ClassAndId = Template.bind({});
ClassAndId.args = {
  id: '121',
  className: 'class-name',
  onClick: (event) => {
    event.preventDefault();
    console.log(event.currentTarget.id);
  },
};
