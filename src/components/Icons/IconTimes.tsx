import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faTimesDS = faTimes as IconProp;

export const IconTimes: React.FC = (props) => {
  return <FontAwesomeIcon icon={faTimesDS} {...props} />;
};
