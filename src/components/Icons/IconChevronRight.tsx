import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faChevronRightDS = faChevronRight as IconProp;

export const IconChevronRight: React.FC = (props) => {
  return <FontAwesomeIcon icon={faChevronRightDS} {...props} />;
};
