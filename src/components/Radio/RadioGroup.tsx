import React from 'react';
import classNames from 'classnames';
import useDerivedState from '../../hooks/useDerivedState';
import { RadioGroupProvider } from './RadioContext';

import './radioGroup.scss';

import type { RadioChangeEvent } from './RadioContext';

export type Size = 'small' | 'medium' | 'large';

interface RadioBtnProps {
  radioButtonText?: string;
  radioButtonId?: string;
  radioButtonName?: string;
  radioButtonValue?: string;
  displayName?: string;
  checked?: boolean;
  isHidden?: string;
}

export interface RadioGroupProps<T = any> {
  /**
   * on RadioGroup value change
   */
  onChange?: (value: T) => void;
  /**
   * RadioGroup default value
   */
  defaultValue?: T;
  /**
   * RadioGroup value
   */
  value?: T;
  /**
   * RadioGroup children
   */
  children?: React.ReactNode;
  /**
   * RadioGroup name
   */
  name?: string;
  /**
   * RadioGroup prefix class name
   */
  prefixCls?: string;
  /**
   * RadioGroup className
   */
  className?: string;
  /**
   * RadioGroup Style
   */
  style?: React.CSSProperties;
  /**
   * RadioGroup size, it only work when children is Radio.Button
   */
  size?: Size;
  getData?: (data: any) => void;
  pdTypeClass?: string;
  isHidden?: boolean;
  radioButtonData?: RadioBtnProps;
}

function RadioGroup(props: RadioGroupProps) {
  const {
    name,
    defaultValue,
    size = 'medium',
    className,
    value: propsValue,
    onChange: propsOnChange,
    children,
    ...restProps
  } = props;

  const [value, setValue] = useDerivedState(propsValue || defaultValue, {
    postState: () => propsValue ?? null,
    onChange: propsOnChange,
  });

  const onChange = (event: RadioChangeEvent) => {
    const newValue: any = event.target.value;
    setValue(newValue);
    changeValueFB(newValue);
  };

  const changeValueFB = (data: any) => {
    props.getData && props?.getData(data);
  };

  // const prefixCls = 'radio-group';

  const classes = classNames('radio-group', className, `radio-group-${size}`, {
    [`radio-group-column`]:
      children && (React.Children.toArray(children)[0] as any)?.type.displayName === 'Radio',
  });

  return (
    <RadioGroupProvider
      value={{
        value,
        onChange,
        name,
      }}
    >
      <div {...restProps} className={classes}>
        {children}
      </div>
    </RadioGroupProvider>
  );
}

export default RadioGroup;
