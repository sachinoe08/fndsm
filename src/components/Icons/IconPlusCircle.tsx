import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faPlusCircleDS = faPlusCircle as IconProp;

interface IconPlusCircleProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon?: IconProp;
}

export const IconPlusCircle = (props: IconPlusCircleProps) => (
  <FontAwesomeIcon icon={faPlusCircleDS} {...props} />
);
