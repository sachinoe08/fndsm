import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faArrowDownDS = faArrowDown as IconProp;

export const IconArrowDown: React.FC = (props) => {
  return <FontAwesomeIcon icon={faArrowDownDS} {...props} />;
};
