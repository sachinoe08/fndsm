import React from 'react';
import { default as RBFormRange } from 'react-bootstrap/FormRange';
import { FormRangeProps } from 'react-bootstrap/FormRange';
import './formRange.scss';
export const FormRange: React.FC<FormRangeProps> = (props) => {
  return <RBFormRange {...props} />;
};
