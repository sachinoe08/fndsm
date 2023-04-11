import React from 'react';
import {
  ButtonGroup as RBButtonGroup,
  ButtonGroupProps as RBButtonGroupProps,
} from 'react-bootstrap';
import './buttonGroup.scss';

import { Button, ButtonProps } from '../Button/Button';

export interface ButtonItem extends ButtonProps {
  key: string;
}

export interface ButtonGroupProps extends RBButtonGroupProps {
  items: ButtonItem[];
  ariaLabel: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ items, ariaLabel, ...props }) => {
  return (
    <RBButtonGroup aria-label={ariaLabel} {...props}>
      {items.map((item) => {
        return <Button {...item} />;
      })}
    </RBButtonGroup>
  );
};
