import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Pagination, PaginationProps } from './Pagination';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, updateArgs] = useArgs();

  const previousFunction = () => {
    updateArgs({ ...args, currentPage: args.currentPage - 1 });
  };

  const nextFunction = () => {
    updateArgs({ ...args, currentPage: args.currentPage + 1 });
  };

  return <Pagination {...args} previousFunction={previousFunction} nextFunction={nextFunction} />;
};

export const Small = Template.bind({});

Small.args = {
  size: 'sm',
  currentPage: 1,
  ofLabel: 'of',
  lastPage: 9,
};
