import React from 'react';
import { default as RBOverlay, OverlayProps as RBOverlayProps } from 'react-bootstrap/Overlay';
import {
  default as RBOverlayTrigger,
  OverlayTriggerProps as RBOverlayTriggerProps,
} from 'react-bootstrap/OverlayTrigger';

import './overlay.scss';

export const Overlay: React.FC<RBOverlayProps> = (props) => {
  return <RBOverlay {...props}>{props.children}</RBOverlay>;
};

export const OverlayTrigger: React.FC<RBOverlayTriggerProps> = (props) => {
  return <RBOverlayTrigger {...props}>{props.children}</RBOverlayTrigger>;
};
