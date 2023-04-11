import React from 'react';
import { Table, TableProps } from './Table';
import { Meta, Story } from '@storybook/react';
export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    striped: {
      type: 'boolean',
    },
    bordered: {
      type: 'boolean',
    },
    hover: {
      type: 'boolean',
    },
    responsive: {
      type: 'boolean',
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    variant: {
      options: ['light', 'dark', 'primary', 'secondary', 'success', 'warning', 'info', 'danger'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Theader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
  );
};

const Tbody = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  );
};

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  theader: <Theader />,
  tbody: <Tbody />,
};

export const Striped = Template.bind({});
Striped.args = {
  theader: <Theader />,
  tbody: <Tbody />,
  striped: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  theader: <Theader />,
  tbody: <Tbody />,
  bordered: true,
};
