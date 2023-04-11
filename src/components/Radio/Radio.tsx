import React, { useContext } from 'react';
import { FormCheck, FormCheckProps } from 'react-bootstrap';
import classNames from 'classnames';

import RadioContext from './RadioContext';

export type ComponentProps<T, U extends keyof any = never> = Omit<T, 'aria-label' | U> & {
  'aria-label': string;
};

import './radio.scss';

export interface RadioProps extends ComponentProps<FormCheckProps> {
  /**
   * The value of the radio button
   */
  type?: 'radio' | 'checkbox';
  /**
   * Whether Radio checked
   */
  checked?: boolean;
  /**
   * Radio default checked
   */
  defaultChecked?: boolean;
  /**
   * Whether Radio disabled
   */
  disabled?: boolean;
  /**
   * Radio name
   */
  name?: string;
}

const Radio: React.FC<RadioProps> = (props) => {
  const { style, className, children, type = 'radio', ...restProps } = props;
  const prefixCls = 'radio';
  const radioContext = useContext(RadioContext);

  const wrapCls = classNames(`${prefixCls}-wrap`, className, {
    [`${prefixCls}-with-label`]: !!children,
  });

  const radioProps: RadioProps = { ...restProps };

  if (radioContext) {
    radioProps.onChange = radioContext.onChange as any;
    radioProps.checked = radioProps.value === radioContext.value;
    radioProps.disabled = radioProps.disabled || radioContext.disabled;
    radioProps.name = radioProps.name || radioContext.name;
  }

  return (
    <label className={wrapCls} style={style}>
      <FormCheck {...radioProps} prefixCls={prefixCls} type={type} />
      {children && <span className={`${prefixCls}-label`}>{children}</span>}
    </label>
  );
};

export default Radio;
