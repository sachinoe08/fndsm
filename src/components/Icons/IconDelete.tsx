import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faDelete = faTrashAlt as IconProp;

export const IconDelete: React.FC = (props) => {
  return <FontAwesomeIcon icon={faDelete} {...props} />;
};
