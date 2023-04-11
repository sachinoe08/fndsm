import React, { useState } from 'react';
import RadioGroup from './RadioGroup';

import type { RadioGroupProps } from './RadioGroup';
import type { Meta, Story } from '@storybook/react';
import classNames from 'classnames';
export default {
  title: 'Components/Radio/Radio Group',
  component: RadioGroup,
} as Meta;

interface radioList {
  flexrow: boolean;
  list: string[];
}

const testArr = [
  {
    pdTypeClass: 'single',
    isHidden: false,
    radioButtonData: {
      radioButtonText: 'Single PD',
      radioButtonId: 'filtering-single-pd',
      radioButtonName: 'pd-selection',
      radioButtonValue: 'Single PD',
      checked: true,
      isHidden: 'false',
    },
  },
  {
    pdTypeClass: 'dual',
    isHidden: true,
    radioButtonData: {
      radioButtonText: 'Dual PD',
      radioButtonId: 'filtering-dual-pd',
      radioButtonName: 'pd-selection',
      radioButtonValue: 'Dual PD',
      displayName: 'PD',
      checked: false,
      isHidden: 'true',
    },
  },
];

const Template: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = useState<string>(args[0].radioButtonData.radioButtonText);
  return (
    <RadioGroup value={value} onChange={setValue} className={classNames('radiogroup')}>
      {Object.values(args).map((item: any, key) => {
        return (
          <Radio
            className={item.pdTypeClass}
            aria-label={`${item.pdTypeClass} Radio`}
            value={item.radioButtonData.radioButtonText}
            key={key}
          >
            {item.radioButtonData.radioButtonText}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};

export const RadioButtonGroupExample = Template.bind({});
RadioButtonGroupExample.args = testArr;
// debugger;
RadioButtonGroupExample.storyName = 'Radio Group';
