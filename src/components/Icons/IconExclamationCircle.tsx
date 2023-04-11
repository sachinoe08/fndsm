import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faExclamationCircleDS = faExclamationCircle as IconProp;

export const IconExclamationCircle: React.FC = (props) => {
  return <FontAwesomeIcon icon={faExclamationCircleDS} {...props} />;
};
