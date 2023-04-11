import React, { ReactElement } from 'react';
import {
  Nav as RBNav,
  NavLinkProps as RBNavLinkProps,
  NavProps as RBNavProps,
} from 'react-bootstrap';
import classNames from 'classnames';

import './nav.scss';
import { replacePatternInString } from '../../utils/stringUtils';
import { IconChevronRight } from '../Icons';

export interface NavProps extends RBNavProps {
  defaultActiveKey: string;
  vertical?: boolean;
  groups: NavPropsGroup[];
  linkComponent?: React.Component;
}

export interface NavPropsGroup {
  key: number;
  title?: string;
  separator?: boolean;
  items: NavLinkProps[];
}

export interface NavLinkProps extends RBNavLinkProps {
  key: any;
  label: string;
  link?: string;
  customItem?: ReactElement;
  isActive?: string;
}

export const Nav: React.FC<NavProps> = ({
  vertical,
  groups,
  className,
  linkComponent,
  activeKey,
  ...props
}) => {
  const prefixCls = 'filter-view';
  const wrapCls = classNames(`${prefixCls}-wrap`, className, vertical ? 'flex-column' : '');

  const showItemLink = (
    link: string | undefined,
    index: number,
    isActive: string | undefined,
    label: any | undefined,
    activeKey: string | number | undefined,
    LinkComponent?: any
  ) => {
    return (
      <LinkComponent
        to={link}
        className={`${index === 0 ? 'first-group-link' : ''} nav-link
            ${activeKey === link ? 'active' : ''}`}
      >
        {replacePatternInString(label)}
        {isActive && (
          <span>
            <IconChevronRight />
          </span>
        )}
      </LinkComponent>
    );
  };

  return (
    <>
      <RBNav {...props} activeKey={activeKey} as="ul" className={wrapCls}>
        {groups.map((group) => (
          <React.Fragment key={group.key}>
            {group.title ? (
              <li className="nav-item nav-group-title">
                <span className="nav-link">{replacePatternInString(group.title)}</span>
              </li>
            ) : (
              ''
            )}
            {group.separator ? (
              <li className="nav-item nav-group-separator chevron-down">
                {' '}
                <span className="nav-link" />
              </li>
            ) : (
              ''
            )}
            {group.items.map(({ key, customItem, label, link, isActive, ...item }, index) => (
              <RBNav.Item as="li" key={key}>
                {customItem ? (
                  customItem
                ) : linkComponent ? (
                  showItemLink(link, index, isActive, label, activeKey, linkComponent)
                ) : (
                  <RBNav.Link
                    {...item}
                    href={link}
                    className={index === 0 ? 'first-group-link' : ''}
                  >
                    {replacePatternInString(label)}
                    {isActive && (
                      <span>
                        <IconChevronRight />
                      </span>
                    )}
                  </RBNav.Link>
                )}
              </RBNav.Item>
            ))}
          </React.Fragment>
        ))}
      </RBNav>
    </>
  );
};
