import React, { ReactElement, useState } from 'react';
import { Toast as RBToast, ToastProps as RBToastProps } from 'react-bootstrap';

import './toast.scss';

export interface ToastProps extends RBToastProps {
  toastTitle?: string | ReactElement;
  toastBody?: string | ReactElement;
  hideHeader?: boolean;
  isActive?: boolean;
  autoHide?: boolean;
  delay?: number;
  children: ReactElement;
}

export const Toast: React.FC<ToastProps> = ({
  toastTitle,
  toastBody,
  hideHeader,
  isActive,
  autoHide,
  delay,
  ...props
}) => {
  const [show, setShow] = useState(isActive);

  return (
    <RBToast
      {...props}
      onClose={() => setShow(false)}
      show={show}
      delay={delay}
      autohide={autoHide}
    >
      {!hideHeader && <RBToast.Header>{toastTitle}</RBToast.Header>}
      <RBToast.Body>{toastBody}</RBToast.Body>
    </RBToast>
  );
};
