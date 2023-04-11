import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Overlay, OverlayTrigger } from './Overlay';
import { OverlayProps } from 'react-bootstrap/Overlay';
import { Button, OverlayTriggerProps } from 'react-bootstrap';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  argTypes: {
    placement: {
      options: [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<OverlayProps> = (args) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay {...args} target={target} show={show} placement={args.placement}>
        <p
          style={{
            backgroundColor: 'gray',
            color: 'white',
            padding: '10px',
            borderRadius: '10px',
            display: show ? '' : 'none',
          }}
        >
          Overlay example
        </p>
      </Overlay>
    </>
  );
};

const TemplateTrigger: Story<OverlayTriggerProps> = (args) => {
  const overlay = (
    <p
      style={{
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      Overlay Trigger example
    </p>
  );

  return (
    <>
      <OverlayTrigger {...args} placement={args.placement} overlay={overlay}>
        <Button>Hover me to see</Button>
      </OverlayTrigger>
    </>
  );
};

export const Top = Template.bind({});
Top.args = {
  placement: 'top',
};

export const Left = Template.bind({});
Left.args = {
  placement: 'left',
};

export const Trigger = TemplateTrigger.bind({});
Trigger.args = {
  placement: 'left',
};
