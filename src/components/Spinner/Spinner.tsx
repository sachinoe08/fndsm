import React from 'react';
import { default as RBSpinner, SpinnerProps as RBSpinnerProps } from 'react-bootstrap/Spinner';
import './spinner.scss';

export interface SpinnerProps extends RBSpinnerProps {
  squared: boolean;
}

const SquaredSpinner: React.FC<RBSpinnerProps> = ({ size = 'md', variant = 'primary' }) => (
  <div className={`spinner-squared ${size} text-${variant}`}>
    <div className="square" />
    <div className="square" />
    <div className="square" />
    <div className="square" />
  </div>
);

export const Spinner: React.FC<SpinnerProps> = ({ squared, ...props }) => {
  if (squared) return <SquaredSpinner {...props} />;
  return <RBSpinner {...props} />;
};
