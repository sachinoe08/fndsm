import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faCheckDS = faCheck as IconProp;

export const IconCheck: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCheckDS} {...props} />;
};
