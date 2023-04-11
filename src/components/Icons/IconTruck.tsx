import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faTruckDS = faTruck as IconProp;

export const IconTruck: React.FC = (props) => {
  return <FontAwesomeIcon icon={faTruckDS} {...props} />;
};
