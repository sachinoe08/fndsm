import React, { ReactElement } from 'react';
import { Dropdown as RBDropdown, DropdownProps as RBDropdownProps } from 'react-bootstrap';
import {
  default as RBDropdownItem,
  DropdownItemProps as RBDropdownItemProps,
} from 'react-bootstrap/DropdownItem';
import {
  default as RBDropdownMenu,
  DropdownMenuProps as RBDropdownMenuProps,
} from 'react-bootstrap/DropdownMenu';
import {
  default as RBDropdownToggle,
  DropdownToggleProps as RBDropdownToggleProps,
} from 'react-bootstrap/DropdownToggle';

import './dropdown.scss';

export interface DropdownItemProps extends RBDropdownItemProps {
  key: number;
}

export interface DropdownProps extends RBDropdownProps {
  variant: string;
  items: DropdownItemProps[] | ReactElement;
  menu?: RBDropdownMenuProps;
  toggle?: RBDropdownToggleProps;
}

const isReactElement = (object: any): object is ReactElement => {
  return '$$typeof' in object;
};

export const Dropdown: React.FC<DropdownProps> = ({ variant, menu, toggle, items, ...props }) => {
  return (
    <RBDropdown {...props} className={`dropdown-button`}>
      <RBDropdownToggle {...toggle} tabIndex={0} variant={variant}>
        {props.title}
        <span className={'toggle-icon-box'}>
          <span className={'toggle-icon'} />
        </span>
      </RBDropdownToggle>

      <RBDropdownMenu {...menu} variant={variant}>
        {isReactElement(items) ? (
          <div className="p-3">{items}</div>
        ) : (
          items.map((item) => (
            <>
              <RBDropdownItem {...item}>{item.title}</RBDropdownItem>
            </>
          ))
        )}
      </RBDropdownMenu>
    </RBDropdown>
  );
};
