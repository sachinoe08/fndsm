import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faMinusCircleDS = faMinusCircle as IconProp;

interface IconMinusCircleProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon?: IconProp;
}

export const IconMinusCircle = (props: IconMinusCircleProps) => (
  <FontAwesomeIcon icon={faMinusCircleDS} {...props} />
);
