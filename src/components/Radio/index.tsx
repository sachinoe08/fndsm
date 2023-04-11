import InternalRadioGroup from './RadioGroup';
import Radio from './Radio';
import RadioButton from './RadioButton';

const RadioGroup = InternalRadioGroup as typeof InternalRadioGroup & {
  Button: typeof RadioButton;
};
RadioGroup.Button = RadioButton;

export { RadioGroup, Radio };

export type { RadioProps } from './Radio';
export type { RadioGroupProps } from './RadioGroup';
