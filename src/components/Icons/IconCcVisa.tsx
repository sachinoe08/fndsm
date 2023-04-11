import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faCcVisaDS = faCcVisa as IconProp;

export const IconCcVisa: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCcVisaDS} {...props} />;
};
