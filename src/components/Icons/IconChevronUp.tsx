import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faChevronUptDS = faChevronUp as IconProp;

export const IconChevronUp: React.FC = (props) => {
  return <FontAwesomeIcon icon={faChevronUptDS} {...props} />;
};
