import React from 'react';
import { default as RBCloseButton, CloseButtonProps } from 'react-bootstrap/CloseButton';

import './closeButton.scss';

export const CloseButton: React.FC<CloseButtonProps> = (props) => {
  return <RBCloseButton {...props} />;
};
