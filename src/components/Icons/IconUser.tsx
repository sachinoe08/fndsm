import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faUserDs = faUser as IconProp;

export const IconUser: React.FC = (props) => {
  return <FontAwesomeIcon icon={faUserDs} {...props} />;
};
