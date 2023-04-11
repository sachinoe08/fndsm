import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faCheckCircleDS = faCheckCircle as IconProp;

export const IconCheckCircle: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCheckCircleDS} {...props} />;
};
