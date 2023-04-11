import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faChevronLeftDS = faChevronLeft as IconProp;

export const IconChevronLeft: React.FC = (props) => {
  return <FontAwesomeIcon icon={faChevronLeftDS} {...props} />;
};
