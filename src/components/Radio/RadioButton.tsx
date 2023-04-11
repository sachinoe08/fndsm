import React, { useContext } from 'react';
import classNames from 'classnames';
import Radio from './Radio';
import RadioContext from './RadioContext';

import './buttonGroup.scss';

import type { RadioProps } from './Radio';

export type RadioButtonProps = RadioProps;

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { className, ...restProps } = props;
  const radioContext = useContext(RadioContext);
  const prefix = 'radio-button';

  const classes = classNames(prefix, className, {
    [`${prefix}-checked`]: radioContext?.value === props.value,
  });

  return <Radio {...restProps} className={classes} />;
};

export default RadioButton;
