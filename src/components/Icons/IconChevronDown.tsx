import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faChevronDownDS = faChevronDown as IconProp;

export const IconChevronDown: React.FC = (props) => {
  return <FontAwesomeIcon icon={faChevronDownDS} {...props} />;
};
