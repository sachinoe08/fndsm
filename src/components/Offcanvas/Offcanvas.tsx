import React from 'react';
import {
  default as RBOffcanvas,
  OffcanvasProps as RBOffcanvasProps,
} from 'react-bootstrap/Offcanvas';
import './offcanvas.scss';

export interface OffcanvasProps extends RBOffcanvasProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  closeButton?: boolean;
}

export const Offcanvas: React.FC<OffcanvasProps> = ({ closeButton, title, children, ...props }) => {
  return (
    <>
      <RBOffcanvas {...props}>
        {title || closeButton === undefined || closeButton ? (
          <RBOffcanvas.Header closeButton={closeButton}>
            <span className="span-to-center-title" />
            {title ? <RBOffcanvas.Title>{title}</RBOffcanvas.Title> : ''}
          </RBOffcanvas.Header>
        ) : (
          ''
        )}
        <RBOffcanvas.Body>{children}</RBOffcanvas.Body>
      </RBOffcanvas>
    </>
  );
};
