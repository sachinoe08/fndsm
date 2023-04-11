import React, { ReactElement } from 'react';
import { Modal as RBModal, ModalProps as RBModalProps } from 'react-bootstrap';
import classNames from 'classnames';

import './modal.scss';

export interface ModalProps extends RBModalProps {
  modalTitle?: string | ReactElement;
  hideHeader?: boolean;
  noPadding?: boolean;
  absoluteHeader?: boolean;
  children: ReactElement;
  footerChildren?: ReactElement;
  /**
   * TODO to customize the style of the close button, you need to add the value here and the corresponding SCSS style
   */
  closeButtonTheme?: 'primary';
}

export const Modal: React.FC<ModalProps> = ({
  footerChildren,
  modalTitle,
  hideHeader,
  absoluteHeader,
  noPadding,
  closeButtonTheme,
  ...props
}) => {
  return (
    <>
      <RBModal
        {...props}
        className={classNames(props.className, noPadding ? 'no-padding-modal' : '')}
      >
        {!hideHeader && (
          <RBModal.Header
            bsPrefix={classNames('modal-header-css', {
              'absolute-header': absoluteHeader,
              [`close-btn-theme-${closeButtonTheme}`]: closeButtonTheme,
            })}
            closeButton={props.closeButton}
          >
            <RBModal.Title>{modalTitle}</RBModal.Title>
          </RBModal.Header>
        )}
        <RBModal.Body>{props.children}</RBModal.Body>
        {footerChildren && <RBModal.Footer>{footerChildren}</RBModal.Footer>}
      </RBModal>
    </>
  );
};
