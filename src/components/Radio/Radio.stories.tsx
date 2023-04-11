import React from 'react';
import Radio from './Radio';

import type { Meta, Story } from '@storybook/react';
import type { RadioProps } from './Radio';

export default {
  title: 'Components/Radio/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => (
  <>
    <Radio {...args} />
    <Radio {...args} checked>
      Checked
    </Radio>
    <Radio {...args} disabled>
      Disabled
    </Radio>
    <Radio {...args} checked disabled>
      Checked, Disabled
    </Radio>
  </>
);

export const RadioButtonExample = Template.bind({});
RadioButtonExample.storyName = 'Radio';
