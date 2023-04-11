import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faCreditCardDS = faCreditCard as IconProp;

export const IconCreditCard: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCreditCardDS} {...props} />;
};
