import React from 'react';
import { default as RBBadge, BadgeProps as RBBadgeProps } from 'react-bootstrap/Badge';

import './badge.scss';

export interface BadgeProps extends RBBadgeProps {
  border: boolean;
  borderRadius: string;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  border,
  borderRadius = 'none',
  children,
  ...props
}) => {
  return (
    <RBBadge
      {...props}
      className={
        (borderRadius ? ` badge-border-radius-${borderRadius}` : '') + (border ? ' border-on' : '')
      }
    >
      {children}
    </RBBadge>
  );
};
