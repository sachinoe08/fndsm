import React from 'react';
import { default as RBPopover, PopoverProps as RBPopoverProps } from 'react-bootstrap/Popover';
import { default as RBOverlay } from 'react-bootstrap/Overlay';
import { default as RBOverlayTrigger, OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger';
import './popover.scss';

export interface PopoverProps extends RBPopoverProps {
  id: string;
  color: string;
  borderRadius?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  target?: React.MutableRefObject<null>;
  triggerElement?: React.ReactElement;
  triggerProps?: OverlayTriggerProps;
  shadow?: boolean;
}

function getPopover(propsParam: PopoverProps) {
  const {
    id,
    color = 'light',
    borderRadius = 'none',
    header,
    shadow,
    children,
    className,
    ...props
  } = { ...propsParam };

  delete props.target;
  delete props.triggerProps;
  delete props.triggerElement;

  return (
    <RBPopover
      id={id}
      {...props}
      className={`popover-${color} radius-${borderRadius} ${shadow ? ' shadow ' : ''} ${className}`}
    >
      {header && <RBPopover.Header>{header}</RBPopover.Header>}
      <RBPopover.Body>{children}</RBPopover.Body>
    </RBPopover>
  );
}

export const Popover: React.FC<PopoverProps> = (propsParam) => {
  const { target, triggerElement, triggerProps, ...props } = { ...propsParam };
  return (
    <>
      {triggerElement ? (
        <RBOverlayTrigger
          {...triggerProps}
          placement={props.placement}
          overlay={getPopover(propsParam)}
        >
          {triggerElement}
        </RBOverlayTrigger>
      ) : (
        <RBOverlay
          target={target ? target.current : null}
          show={props.show}
          placement={props.placement}
        >
          {getPopover(propsParam)}
        </RBOverlay>
      )}
    </>
  );
};
