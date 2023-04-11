import React from 'react';
import {
  default as RBPlaceholder,
  PlaceholderProps as RBPlaceholderProps,
} from 'react-bootstrap/Placeholder';

import {
  default as RBPlaceholderButton,
  PlaceholderButtonProps as RBPlaceholderButtonProps,
} from 'react-bootstrap/PlaceholderButton';

import './placeholder.scss';

export interface PlaceholderProps extends RBPlaceholderProps {
  key: number;
  type?: undefined;
  items?: (PlaceholderProps | PlaceholderButtonProps)[];
}

export interface PlaceholderButtonProps extends RBPlaceholderButtonProps {
  key: number;
  type: 'button';
}

export const PlaceholderButton: React.FC<RBPlaceholderButtonProps> = ({ ...props }) => {
  return (
    <>
      <RBPlaceholderButton {...props} />
    </>
  );
};

export const Placeholder: React.FC<PlaceholderProps> = ({ items, ...props }) => {
  return (
    <>
      <RBPlaceholder {...props}>
        {items &&
          items.map((item) => {
            return item.type === 'button' ? (
              <RBPlaceholderButton {...item} />
            ) : (
              <RBPlaceholder {...item} />
            );
          })}
      </RBPlaceholder>
    </>
  );
};
