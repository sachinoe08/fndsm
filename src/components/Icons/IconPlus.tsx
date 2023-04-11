import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faPlusDS = faPlus as IconProp;

export const IconPlus: React.FC = (props) => {
  return <FontAwesomeIcon icon={faPlusDS} {...props} />;
};
