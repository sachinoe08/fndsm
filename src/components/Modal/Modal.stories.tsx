import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    fullscreen: {
      options: [undefined, true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'],
      control: 'select',
    },
    size: {
      options: ['sm', 'lg', 'xl'],
      control: 'select',
    },
    absoluteHeader: {
      description: 'Makes the header absolute, so content can start on the top.',
      control: 'boolean',
    },
    noPadding: {
      description: 'Remove padding from modal',
      control: 'boolean',
    },
    hideHeader: {
      control: 'boolean',
    },
  },
} as Meta;

const childComponent = () => <p>I'm the modal content</p>;

const childComponentForAbsoluteHeaderModal = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '50%' }}>
      <img
        style={{ width: '100%' }}
        src="https://cdn.pixabay.com/photo/2021/11/03/00/06/mountain-6764359_960_720.jpg"
      />
    </div>
    <div style={{ margin: '25px 0 0 15px' }}>I'm the modal content</div>
  </div>
);

const childComponentForScrollableModal = () => (
  <>
    {Array.from(Array(25).keys()).map((item, index) => (
      <div key={index}>I'm the modal content {item}</div>
    ))}
  </>
);

const complexChildComponent = () => (
  <div className="optExp__20412525606--tab">
    <p>
      Your eye doctor will measure your PD, but they don’t always include it on your prescription.
      This short video tells you how to measure it yourself.
    </p>
    <iframe
      width="560"
      height="315"
      style={{ maxWidth: '100%' }}
      src="https://www.youtube.com/embed/TMXG-YN8zhc?controls=0"
    />
  </div>
);

const footerChildComponent = (parent: Story<ModalProps>) => (
  <button
    className={'btn btn-primary'}
    onClick={() => {
      if (parent?.args) {
        parent.args.show = false;
      }
    }}
  >
    Close
  </button>
);

const commonAttributes = {
  modalTitle: 'Modal Title',
  show: true,
  closeButton: true,
  children: childComponent(),
};

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const SmallModal = Template.bind({});

SmallModal.args = {
  ...commonAttributes,
  size: 'sm',
};

export const LargeModal = Template.bind({});

LargeModal.args = {
  ...commonAttributes,
  size: 'lg',
};

export const ComplexBody = Template.bind({});

ComplexBody.args = {
  ...commonAttributes,
  size: 'lg',
  children: complexChildComponent(),
};

export const Fullscreen = Template.bind({});

Fullscreen.args = {
  ...commonAttributes,
  fullscreen: true,
};

export const FullscreenOnSmallScreens = Template.bind({});

FullscreenOnSmallScreens.args = {
  ...commonAttributes,
  fullscreen: 'sm-down',
};

export const NoCloseButton = Template.bind({});

NoCloseButton.args = {
  ...commonAttributes,
  closeButton: false,
};

export const NoHeader = Template.bind({});

NoHeader.args = {
  ...commonAttributes,
  hideHeader: true,
};

export const AbsoluteHeader = Template.bind({});

AbsoluteHeader.args = {
  ...commonAttributes,
  modalTitle: '',
  absoluteHeader: true,
  noPadding: true,
  children: childComponentForAbsoluteHeaderModal(),
};

export const NoPadding = Template.bind({});

NoPadding.args = {
  ...commonAttributes,
  modalTitle: '',
  absoluteHeader: true,
  noPadding: true,
  children: childComponentForAbsoluteHeaderModal(),
};

export const WithFooter = Template.bind({});

WithFooter.args = {
  ...commonAttributes,
  footerChildren: footerChildComponent(WithFooter),
};

export const NoTitle = Template.bind({});

NoTitle.args = {
  ...commonAttributes,
  modalTitle: undefined,
};

export const TitleWithHtml = Template.bind({});

TitleWithHtml.args = {
  ...commonAttributes,
  modalTitle: <h4>Modal Title</h4>,
};

export const Scrollable = Template.bind({});

Scrollable.args = {
  ...commonAttributes,
  scrollable: true,
  children: childComponentForScrollableModal(),
};
