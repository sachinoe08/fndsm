import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Tabs, TabsProps } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabSelectedWithoutBorder: {
      control: 'boolean',
    },
    tabNotSelectedWithoutBorder: {
      control: 'boolean',
    },
    tabNotSelectedOnlyBottomBorder: {
      control: 'boolean',
    },
    noBackgroundColor: {
      control: 'boolean',
    },
    backgroundColorAlwaysOn: {
      control: 'boolean',
    },
    upperCaseTitle: {
      control: 'boolean',
    },
    noPadding: {
      control: 'boolean',
    },
    borderPosition: {
      options: ['bottom', 'top'],
      control: 'select',
    },
  },
} as Meta;

const genericTabs = {
  tabs: [
    {
      eventKey: 'page1',
      title: 'Page 1',
      children: <p> Page 1 </p>,
    },
    {
      eventKey: 'page2',
      title: 'Page 2',
      children: <p> Page 2 </p>,
    },
    {
      eventKey: 'page3',
      title: 'Page 3',
      children: <p> Page 3 </p>,
    },
  ],
};

const productDetails = {
  tabs: [
    {
      eventKey: 'page1',
      title: 'Details',
      children: <p> Details </p>,
    },
    {
      eventKey: 'page2',
      title: 'Description',
      children: <p> Description </p>,
    },
    {
      eventKey: 'page3',
      title: 'Reviews',
      children: <p> Reviews </p>,
    },
  ],
};

const frames = {
  tabs: [
    {
      eventKey: 'page1',
      title: (
        <div style={{ margin: '0 10px' }}>
          <img src="https://static.zennioptical.com/production/products/general/20/86/208612-eyeglasses-front-view.jpg?im=Resize,width=65" />
          <p>Navy</p>
        </div>
      ),
      children: <p> Navy product </p>,
    },
    {
      eventKey: 'page2',
      title: (
        <div style={{ margin: '0 10px' }}>
          <img src="https://static.zennioptical.com/production/products/general/20/86/208612-eyeglasses-front-view.jpg?im=Resize,width=65" />
          <p>Gray</p>
        </div>
      ),
      children: <p> Gray product </p>,
    },
  ],
};

const prescription = {
  tabs: [
    {
      eventKey: 'page1',
      title: 'Find your PD',
      children: <p> Details </p>,
    },
    {
      eventKey: 'page2',
      title: 'PD Types',
      children: <p> Description </p>,
    },
    {
      eventKey: 'page3',
      title: 'What is PD',
      children: <p> Reviews </p>,
    },
  ],
};

const login = {
  tabs: [
    {
      eventKey: 'page1',
      title: 'Sign In',
      children: <p> Sign In </p>,
    },
    {
      eventKey: 'page2',
      title: 'Create Account',
      children: <p> Create Account </p>,
    },
  ],
};

const colors = {
  tabs: [
    {
      eventKey: 'page1',
      title: <div style={{ backgroundColor: 'red', width: '10px', height: '10px' }} />,
      children: <p> Red Red Red Red </p>,
    },
    {
      eventKey: 'page2',
      title: <div style={{ backgroundColor: 'green', width: '10px', height: '10px' }} />,
      children: <p> Green Green Green Green </p>,
    },
  ],
};

export const BorderOnTop: Story<TabsProps> = (args) => <Tabs {...args} />;

BorderOnTop.args = {
  defaultActiveKey: 'page1',
  tabNotSelectedOnlyBottomBorder: true,
  ...productDetails,
};

export const NoThinBorders: Story<TabsProps> = (args) => <Tabs {...args} />;

NoThinBorders.args = {
  defaultActiveKey: 'page1',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  ...genericTabs,
};

export const BorderAtTheBottom: Story<TabsProps> = (args) => <Tabs {...args} />;

BorderAtTheBottom.args = {
  defaultActiveKey: 'page1',
  borderPosition: 'bottom',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  ...genericTabs,
};

export const NoBackgroundColor: Story<TabsProps> = (args) => <Tabs {...args} />;

NoBackgroundColor.args = {
  defaultActiveKey: 'page1',
  borderPosition: 'bottom',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  noBackgroundColor: true,
  ...prescription,
};

export const BackgroundColorAlwaysOn: Story<TabsProps> = (args) => <Tabs {...args} />;

BackgroundColorAlwaysOn.args = {
  defaultActiveKey: 'page1',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  backgroundColorAlwaysOn: true,
  ...genericTabs,
};

export const ExpandToParent: Story<TabsProps> = (args) => <Tabs {...args} />;

ExpandToParent.args = {
  defaultActiveKey: 'page1',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  backgroundColorAlwaysOn: true,
  expand: true,
  contentSameColor: true,
  ...login,
};

export const UpperCaseText: Story<TabsProps> = (args) => <Tabs {...args} />;

UpperCaseText.args = {
  defaultActiveKey: 'page1',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  backgroundColorAlwaysOn: true,
  upperCaseTitle: true,
  ...login,
};

export const TabsWithHtml: Story<TabsProps> = (args) => <Tabs {...args} />;

TabsWithHtml.args = {
  defaultActiveKey: 'page1',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  noBackgroundColor: true,
  ...colors,
};

export const TabsNoPadding: Story<TabsProps> = (args) => <Tabs {...args} />;

TabsNoPadding.args = {
  defaultActiveKey: 'page1',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  noBackgroundColor: true,
  noPadding: true,
  ...colors,
};

export const CustomTitle: Story<TabsProps> = (args) => <Tabs {...args} />;

CustomTitle.args = {
  defaultActiveKey: 'page1',
  tabNotSelectedWithoutBorder: true,
  tabSelectedWithoutBorder: true,
  noBackgroundColor: true,
  noPadding: true,
  ...frames,
};
