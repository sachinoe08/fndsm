import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faMinusDS = faMinus as IconProp;

export const IconMinus: React.FC = (props) => {
  return <FontAwesomeIcon icon={faMinusDS} {...props} />;
};
