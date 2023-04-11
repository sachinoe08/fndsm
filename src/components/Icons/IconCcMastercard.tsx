import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faCcMastercardDS = faCcMastercard as IconProp;

export const IconCcMastercard: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCcMastercardDS} {...props} />;
};
