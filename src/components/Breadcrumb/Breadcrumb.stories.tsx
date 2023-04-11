import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;
const link = 'https://www.zennioptical.com';
export const IconAlone = Template.bind({});

IconAlone.args = {
  items: [
    {
      key: 1,
      link,
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      key: 2,
      label: 'Page 2',
      link,
    },
    {
      key: 3,
      label: 'Page 3',
      active: true,
    },
  ],
};

export const IconAndLabel = Template.bind({});

IconAndLabel.args = {
  items: [
    {
      key: 1,
      link,
      label: 'Home',
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      key: 2,
      label: 'Page 2',
      link,
    },
    {
      key: 3,
      label: 'Page 3',
      active: true,
    },
  ],
};
