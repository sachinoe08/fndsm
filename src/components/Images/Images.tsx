import React from 'react';
import { default as RBImage, ImageProps } from 'react-bootstrap/Image';

import './images.scss';

export const Image: React.FC<ImageProps> = (props) => {
  return <RBImage {...props} />;
};
