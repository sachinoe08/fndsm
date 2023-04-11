import React, { ReactElement } from 'react';
import { Tab as RBTab, Tabs as RBTabs } from 'react-bootstrap';
import { TabProps as RBTabProps } from 'react-bootstrap/Tab';
import { TabsProps as RBTabsProps } from 'react-bootstrap/Tabs';

import './tabs.scss';

export interface TabsProps extends RBTabsProps {
  tabSelectedWithoutBorder?: boolean;
  tabNotSelectedWithoutBorder?: boolean;
  tabNotSelectedOnlyBottomBorder?: boolean;
  noBackgroundColor?: boolean;
  backgroundColorAlwaysOn?: boolean;
  borderPosition?: string;
  upperCaseTitle?: boolean;
  noPadding?: boolean;
  tabs: TabProps[];
  expand: boolean;
  contentSameColor: boolean;
}

export interface TabProps extends RBTabProps {
  children?: ReactElement | undefined;
}

export const Tabs: React.FC<TabsProps> = ({
  tabNotSelectedWithoutBorder,
  tabNotSelectedOnlyBottomBorder,
  tabSelectedWithoutBorder,
  noBackgroundColor,
  backgroundColorAlwaysOn,
  borderPosition,
  upperCaseTitle,
  noPadding,
  expand,
  contentSameColor,
  tabs,
  className,
  onSelect,
  ...props
}) => {
  return (
    <RBTabs
      {...props}
      className={
        (noPadding ? ' tabs-no-padding ' : '') +
        (upperCaseTitle ? ' tabs-upper-case ' : '') +
        (noBackgroundColor ? ' tabs-no-background ' : '') +
        (backgroundColorAlwaysOn ? ' tabs-background-always-on ' : '') +
        (tabNotSelectedWithoutBorder ? ' tabs-no-border ' : '') +
        (tabNotSelectedOnlyBottomBorder ? 'tabs-not-selected-only-bottom-border ' : '') +
        (tabSelectedWithoutBorder ? ' tabs-selected-no-border ' : '') +
        (expand ? ' tabs-expand ' : '') +
        (contentSameColor ? ' tabs-content-same-color ' : '') +
        (borderPosition === 'bottom' ? ' tabs-bottom-border ' : '') +
        (className ? className : '')
      }
      onSelect={onSelect}
    >
      {tabs?.map(({ children, ...tab }) => (
        <RBTab key={tab.eventKey} {...tab}>
          {children}
        </RBTab>
      ))}
    </RBTabs>
  );
};
