import React from 'react';
import { default as RBCard, CardProps as RBCardProps } from 'react-bootstrap/Card';

import './card.scss';

export interface CardProps extends RBCardProps {
  children?: React.ReactNode;
  borderRadius?: string;
  boxShadow?: boolean;
  noPadding?: boolean;
  borderOnHover?: boolean;
  disabled?: boolean;
}

export const Card: React.FC<CardProps> = ({
  borderRadius = 'none',
  boxShadow,
  noPadding,
  children,
  borderOnHover = true,
  disabled,
  ...props
}) => {
  return (
    <RBCard
      {...props}
      className={
        (borderRadius ? ` card-border-radius-${borderRadius}` : '') +
        (boxShadow ? ' card-box-shadow' : '') +
        (noPadding ? ' card-no-padding' : '') +
        (borderOnHover ? ' card-border-on-hover' : '') +
        (disabled ? ' card-disabled' : '')
      }
    >
      {children}
    </RBCard>
  );
};
