import React from 'react';
import { Accordion, AccordionProps } from './Accordion';
import { Meta, Story } from '@storybook/react';
export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    boxShadow: {
      control: 'boolean',
    },
    borderRadius: {
      options: ['sm', 'md'],
      control: 'select',
    },
    bottomMargin: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
  },
  args: {
    items: [
      {
        eventKey: '0',
        header: 'Accordion Item #1',
        body: (
          <p>
            Lorem <strong>ipsum dolor</strong> sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation.
          </p>
        ),
      },
      {
        eventKey: '1',
        header: 'Accordion Item #2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
    ],
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;
export const Default = Template.bind({});
Default.args = {
  defaultActiveKey: '1',
};

export const Customized = Template.bind({});
Customized.args = {
  defaultActiveKey: '0',
  boxShadow: true,
  borderRadius: 'sm',
  bottomMargin: 'md',
};
