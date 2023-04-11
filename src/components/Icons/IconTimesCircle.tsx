import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faTimesCircleDS = faTimesCircle as IconProp;

export const IconTimesCircle: React.FC = (props) => {
  return <FontAwesomeIcon icon={faTimesCircleDS} {...props} />;
};
