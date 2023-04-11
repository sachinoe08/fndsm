import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const faQuestionCircleDS = faQuestionCircle as IconProp;

export const IconQuestionCircle: React.FC = (props) => {
  return <FontAwesomeIcon icon={faQuestionCircleDS} {...props} />;
};
