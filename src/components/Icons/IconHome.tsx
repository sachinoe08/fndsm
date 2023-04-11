import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faHomeDS = faHome as IconProp;

export const IconHome: React.FC = (props) => {
  return <FontAwesomeIcon icon={faHomeDS} {...props} />;
};
