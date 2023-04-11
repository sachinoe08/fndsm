import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faCcAmexDS = faCcAmex as IconProp;

export const IconCcAmex: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCcAmexDS} {...props} />;
};
