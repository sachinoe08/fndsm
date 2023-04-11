import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faCircleDS = faCircle as IconProp;

export const IconCircle: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCircleDS} {...props} />;
};
