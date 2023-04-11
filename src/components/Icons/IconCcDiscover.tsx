import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faCcDiscoverDS = faCcDiscover as IconProp;

export const IconCcDiscover: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCcDiscoverDS} {...props} />;
};
