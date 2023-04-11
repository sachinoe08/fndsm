import React from 'react';
import { Button as RBButton, ButtonProps as RBButtonProps } from 'react-bootstrap';
import './button.scss';

export interface ButtonProps extends RBButtonProps {
  children?: React.ReactNode;
  textUppercase?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, textUppercase = false, ...props }) => {
  return (
    <RBButton className={textUppercase ? 'text-uppercase' : ''} {...props}>
      {children}
    </RBButton>
  );
};
