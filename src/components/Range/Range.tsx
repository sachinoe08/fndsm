import './range.scss';

import classNames from 'classnames';
import Slider from 'rc-slider';
import React, { useEffect, useRef, useState } from 'react';

const { Range: RCSlider } = Slider;

export interface RangeProps {
  defaultValue?: number[];
  value?: number[];
  unit?: string;
  disabled: boolean;
  onChange?: (value: number[]) => void;
  onAfterChange?: (value: number[]) => void;
  className?: string;
}

export const Range: React.FC<RangeProps> = (props) => {
  const { defaultValue, value, unit = 'mm', disabled, className } = props;
  const refValue = useRef(value || defaultValue || [0, 20]);
  const [rangeValue, setRangeValue] = useState(refValue.current);
  const prefixCls = 'range';

  useEffect(() => {
    if (value) {
      setRangeValue(value);
    }
  }, [value]);

  const classes = classNames(prefixCls, className, `${disabled ? prefixCls : ''}-disabled`);

  const handleChange = (val: number[]) => {
    setRangeValue(val);
    props.onChange && props?.onChange(val);
  };

  const handleAfterChange = (val: number[]) => {
    setRangeValue(val);
    props.onAfterChange && props?.onAfterChange(val);
  };

  const rangeConfig = {
    max: defaultValue?.[defaultValue.length - 1],
    min: defaultValue?.[0],
    allowCross: true,
    value: rangeValue,
    disabled,
  };

  const rangeTitle = rangeValue.map((item) => `${item}${unit}`).join(' - ');

  return (
    <div className={classes}>
      <label>{rangeTitle}</label>
      <div className={`${prefixCls}-wrap`}>
        <RCSlider
          prefixCls={prefixCls}
          onChange={handleChange}
          onAfterChange={handleAfterChange}
          {...rangeConfig}
        />
      </div>
    </div>
  );
};
