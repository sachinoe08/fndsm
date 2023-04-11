import React from 'react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Progress',
  component: ProgressBar,
  argTypes: {
    radius: {},
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  bars: [{ key: 1, now: 50 }],
};

export const VisuallyHidden = Template.bind({});
VisuallyHidden.args = {
  bars: [{ key: 1, now: 40, visuallyHidden: true }],
};

export const MultiBars = Template.bind({});
MultiBars.args = {
  bars: [
    { key: 1, now: 40, visuallyHidden: true, outsideLabel: 'Member' },
    { key: 2, now: 0, visuallyHidden: true, outsideLabel: 'Fan $66 - 98' },
    { key: 3, now: 0, visuallyHidden: true, outsideLabel: 'Friend $99 - 198' },
    { key: 4, now: 0, visuallyHidden: true, outsideLabel: 'VIP $199 +' },
  ],
  radius: '10px',
};
