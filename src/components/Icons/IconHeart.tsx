import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

export const IconHeart: React.FC<{ solid: boolean }> = (props) => (
  <FontAwesomeIcon icon={props.solid ? solidHeart : regularHeart} {...props} />
);
