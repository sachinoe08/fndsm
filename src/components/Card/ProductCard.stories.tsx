import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProductCard, ProductCardProps } from './ProductCard';

export default {
  title: 'Components/Card/ProductCard',
  component: ProductCard,
  argTypes: {
    selected: {
      control: 'boolean',
    },
    featured: {
      control: 'boolean',
    },
    title: {
      type: 'string',
    },
    text: {
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
    brandName: {
      type: 'string',
    },
    currencyCode: {
      options: ['CAD', 'USD'],
      control: 'select',
    },
    locale: {
      options: ['en-US'],
      control: 'select',
    },
  },
  args: {
    title: 'Card title',
    text: 'Supporting discriptive text goes here.',
    id: '121',
    className: 'class-name',
    freeText: 'FREE',
    promoText: 'Promo text goes here',
  },
} as Meta;
const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

export const Featured = Template.bind({});
Featured.args = {
  featured: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  imageUrl:
    'https://static.zennioptical.com/dev/image/site/order-process/add-ons/clip-ons/main.svg',
};

export const WithPrice = Template.bind({});
WithPrice.args = {
  price: 120,
};

export const WithBrand = Template.bind({});
WithBrand.args = {
  brandName: 'Brand or Product name',
};

export const FreePrice = Template.bind({});
FreePrice.args = {
  price: 0,
};

export const OnClick = Template.bind({});
OnClick.args = {
  onClick: () => {
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
