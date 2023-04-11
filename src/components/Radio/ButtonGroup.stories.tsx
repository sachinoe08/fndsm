import React, { useState } from 'react';
import { RadioGroup } from '.';

import type { RadioGroupProps } from './RadioGroup';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Radio/Button Group',
  component: RadioGroup,
} as Meta;

const Template: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = useState<'Apple' | 'Lemon' | 'Orange'>('Apple');
  return (
    <RadioGroup {...args} value={value} onChange={setValue}>
      <RadioGroup.Button aria-label="Apple Radio" value="Apple" type="checkbox">
        <span style={{ paddingTop: 1 }}>Apple</span>
      </RadioGroup.Button>
      <RadioGroup.Button aria-label="Lemon Radio" value="Lemon" type="checkbox">
        Lemon
      </RadioGroup.Button>
      <RadioGroup.Button aria-label="Orange Radio" value="Orange" type="checkbox">
        <span style={{ paddingTop: 1 }}>Orange</span>
      </RadioGroup.Button>
    </RadioGroup>
  );
};

export const RadioButtonGroupExample = Template.bind({});
RadioButtonGroupExample.storyName = 'Button Group';
