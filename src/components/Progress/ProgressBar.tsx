import React from 'react';
import './progressbar.scss';
import {
  default as RBProgressBar,
  ProgressBarProps as RBProgressBarProps,
} from 'react-bootstrap/ProgressBar';

export interface ProgressBarItemProps extends RBProgressBarProps {
  key: number;
  outsideLabel?: string;
}

export interface ProgressBarProps {
  bars: ProgressBarItemProps[];
  radius: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ radius, ...props }) => {
  return (
    <div className={'bars-container'}>
      {props.bars.map(({ key, outsideLabel, ...bar }) => (
        <div className={'bar-item-container'} key={key}>
          <RBProgressBar
            {...bar}
            label={`${bar.now}%`}
            style={{ borderRadius: radius || 'auto' }}
          />
          {outsideLabel && <div className={'outside-label'}>{outsideLabel}</div>}
        </div>
      ))}
    </div>
  );
};
