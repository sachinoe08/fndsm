import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faArrowUpDS = faArrowUp as IconProp;

export const IconArrowUp: React.FC = (props) => {
  return <FontAwesomeIcon icon={faArrowUpDS} {...props} />;
};
