import React, { ForwardedRef } from 'react';
import {
  FloatingLabel as RBFloatingLabel,
  Form as RBForm,
  FormSelect as RBFormSelect,
  FormSelectProps as RBFormControlProps,
} from 'react-bootstrap';

import './formSelect.scss';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';

export interface FormSelectProps extends RBFormControlProps {
  message?: string;
  children: React.ReactNode;
  floatingLabel?: boolean;
}

const getFormSelect = (props: FormSelectProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
  const { children, ...remainingProps } = { ...props };

  delete remainingProps.floatingLabel;
  delete remainingProps.message;

  return (
    <>
      <RBFormSelect {...remainingProps} ref={ref}>
        {children}
      </RBFormSelect>
      <span className="input-icon" />
    </>
  );
};

export const FormSelect: BsPrefixRefForwardingComponent<'select', FormSelectProps> =
  React.forwardRef((props, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <>
        {props.floatingLabel === false ? (
          <div className="input-wrapper">{getFormSelect(props, ref)}</div>
        ) : (
          <RBFloatingLabel label={props.placeholder}>{getFormSelect(props, ref)}</RBFloatingLabel>
        )}

        {props.message && (
          <RBForm.Label className={props.isInvalid ? ' is-invalid' : ''}>
            {props.message}
          </RBForm.Label>
        )}
      </>
    );
  });
