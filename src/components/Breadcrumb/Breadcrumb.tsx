import React, { ReactElement } from 'react';
import { default as RBBreadcrumb } from 'react-bootstrap/Breadcrumb';
import {
  BreadcrumbItemProps as RBBreadcrumbItemProps,
  BreadcrumbProps as RBBreadcrumbProps,
} from 'react-bootstrap';

import './breadcrumb.scss';

export type { RBBreadcrumbItemProps, RBBreadcrumbProps };
export interface BreadcrumbProps extends RBBreadcrumbProps {
  items: BreadcrumbItemProps[];
}

export interface BreadcrumbItemProps extends RBBreadcrumbItemProps {
  key: any;
  label?: string;
  link?: string;
  icon?: ReactElement;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return (
    <RBBreadcrumb {...props}>
      {props.items.map(({ link, icon, key, label, title, ...item }) => (
        <RBBreadcrumb.Item {...item} title={label ? '' : title} key={key} href={link}>
          {icon || ''}
          {label && <span className={'item-label'}>{label}</span>}
        </RBBreadcrumb.Item>
      ))}
    </RBBreadcrumb>
  );
};
