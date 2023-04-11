import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faAsteriskDS = faAsterisk as IconProp;

export const IconAsterisk: React.FC = (props) => {
  return <FontAwesomeIcon icon={faAsteriskDS} {...props} />;
};
