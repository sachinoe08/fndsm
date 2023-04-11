import React from 'react';
import { Offcanvas, OffcanvasProps } from './Offcanvas';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../Button';
import { useArgs } from '@storybook/client-api';

const titleComponent = () => <h5>I'm the Offcanvas content</h5>;

const childComponent = () => <p>I'm the Offcanvas content</p>;

export default {
  title: 'Components/Offcanvas',
  component: Offcanvas,
  argTypes: {
    placement: {
      options: ['start', 'end'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    title: titleComponent(),
    children: childComponent(),
    closeButton: true,
    show: true,
  },
} as Meta;

const Template: Story<OffcanvasProps> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, updateArgs] = useArgs();

  const show = () => {
    updateArgs({ ...args, show: true });
  };

  const onHide = () => {
    updateArgs({ ...args, show: false });
  };

  return (
    <>
      <Button variant={'outline-light'} onClick={show}>
        Launch
      </Button>
      <Offcanvas {...args} onHide={onHide}>
        {args.children}
      </Offcanvas>
    </>
  );
};

export const Default = Template.bind({});

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  title: undefined,
  closeButton: false,
};

export const NoBackDrop = Template.bind({});
NoBackDrop.args = {
  backdrop: false,
};

export const OnTheRight = Template.bind({});
OnTheRight.args = {
  backdrop: false,
  placement: 'end',
};
