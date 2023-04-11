import React from 'react';
import './listGroup.scss';
import {
  default as RBListGroup,
  ListGroupProps as RBListGroupProps,
} from 'react-bootstrap/ListGroup';
import {
  default as RBListGroupItem,
  ListGroupItemProps as RBListGroupItemProps,
} from 'react-bootstrap/ListGroupItem';

export interface ListGroupItemProps extends RBListGroupItemProps {
  key: number;
  children: React.ReactNode | string;
}

export interface ListGroupProps extends RBListGroupProps {
  items: ListGroupItemProps[];
  listStyle?: 'tab' | 'button';
}

function getItemClassName(variant?: string, listStyle?: string) {
  if (listStyle === 'button') {
    return `list-group-btn btn btn-${variant ? variant : 'primary'}`;
  }
  if (variant) {
    return `list-group-btn btn btn-${variant}`;
  }
  return 'list-group-btn btn';
}

export const ListGroup: React.FC<ListGroupProps> = ({ listStyle, items, ...props }) => {
  return (
    <RBListGroup {...props} className={listStyle ? `${listStyle}-list-style` : ''}>
      {items.map(({ key, children, ...item }) => (
        <RBListGroupItem key={key} {...item} className={getItemClassName(item.variant, listStyle)}>
          {children}
        </RBListGroupItem>
      ))}
    </RBListGroup>
  );
};
