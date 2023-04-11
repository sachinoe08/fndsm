import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faExclamationTriangleDS = faExclamationTriangle as IconProp;

export const IconExclamationTriangle: React.FC = (props) => {
  return <FontAwesomeIcon icon={faExclamationTriangleDS} {...props} />;
};
