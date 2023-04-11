import React from 'react';
import { Alert as RBAlert, AlertProps as RBAlertProps } from 'react-bootstrap';
import { Variant } from 'react-bootstrap/esm/types';
import './alert.scss';

export interface AlertProps extends RBAlertProps {
  variant: Variant | 'purple';
}

export const Alert: React.FC<AlertProps> = (props) => {
  return <RBAlert {...props} />;
};
