import React, { useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import { Popover } from './Popover';
import { TooltipProps } from '../Tooltip/Tooltip';
import { useArgs } from '@storybook/client-api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#eee' }],
    },
  },
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
    color: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
    borderRadius: {
      options: ['sm', 'md', 'none'],
      control: 'select',
    },
    shadow: {
      control: 'boolean',
    },
  },
  args: {
    id: 'popover-id',
    children: (
      <>
        <h5 className="text-muted">Popover - one message</h5>
        <p className="mb-0">Lorem ipsum dolor sit ame</p>
        <p className="text-muted">Morbi blandit nec tellus sed vestibulum</p>
      </>
    ),
  },
} as Meta;

const Template: Story<TooltipProps> = ({ children, ...args }) => {
  const target = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, updateArgs] = useArgs();

  const toggleShow = () => {
    updateArgs({ ...args, show: !args.show });
  };

  return (
    <>
      <a ref={target} onClick={() => toggleShow()}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </a>
      <Popover {...args} target={target} show={args.show}>
        {children}
      </Popover>
    </>
  );
};

const TemplateTrigger: Story<TooltipProps> = ({ children, ...args }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, updateArgs] = useArgs();

  const toggleShow = () => {
    updateArgs({ ...args, show: !args.show });
  };

  const getTrigger = () => {
    return (
      <a onClick={() => toggleShow()}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </a>
    );
  };

  return (
    <>
      <Popover {...args} show={args.show} triggerElement={getTrigger()}>
        {children}
      </Popover>
    </>
  );
};

export const Left = Template.bind({});
Left.args = {
  placement: 'left',
};

export const Right = Template.bind({});
Right.args = {
  placement: 'right',
};

export const Top = Template.bind({});
Top.args = {
  placement: 'top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  placement: 'bottom',
};

export const Dark = Template.bind({});
Dark.args = {
  placement: 'bottom',
  color: 'dark',
};

export const BorderRadius = Template.bind({});
BorderRadius.args = {
  placement: 'bottom',
  borderRadius: 'sm',
};

export const Trigger = TemplateTrigger.bind({});
Trigger.args = {
  placement: 'bottom',
};

export const Shadow = TemplateTrigger.bind({});
Shadow.args = {
  shadow: true,
};
