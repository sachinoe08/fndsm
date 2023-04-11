import React from 'react';
import { FormCheck as RBFormCheck, FormCheckProps as RBFormCheckProps } from 'react-bootstrap';

import './formCheckBoxRadio.scss';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';

export interface FormCheckProps extends RBFormCheckProps {
  id?: string;
}

export const FormCheck: BsPrefixRefForwardingComponent<'input', FormCheckProps> = React.forwardRef(
  (props, ref) => {
    return (
      <RBFormCheck
        {...props}
        ref={ref}
        label={props.id ? <span {...{ htmlFor: props.id }}>{props.label}</span> : props.label}
      />
    );
  }
);
