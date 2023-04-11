import React from 'react';
import { default as RBTooltip, TooltipProps as RBTooltipProps } from 'react-bootstrap/Tooltip';
import { default as RBOverlay } from 'react-bootstrap/Overlay';
import { default as RBOverlayTrigger, OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger';
import './tooltip.scss';

export interface TooltipProps extends RBTooltipProps {
  id: string;
  color: string;
  borderRadius?: string;
  children: React.ReactNode;
  target?: React.MutableRefObject<null>;
  triggerElement?: React.ReactElement;
  triggerProps?: OverlayTriggerProps;
}

function getTooltip(propsParam: TooltipProps) {
  const { id, color = 'light', borderRadius = 'none', children, ...props } = { ...propsParam };
  delete props.target;
  delete props.triggerProps;
  delete props.triggerElement;
  return (
    <RBTooltip id={id} {...props} className={`tooltip-${color} radius-${borderRadius}`}>
      {children}
    </RBTooltip>
  );
}

export const Tooltip: React.FC<TooltipProps> = (propsParam) => {
  const { target, triggerElement, triggerProps, ...props } = { ...propsParam };
  return (
    <>
      {triggerElement ? (
        <RBOverlayTrigger
          {...triggerProps}
          placement={props.placement}
          overlay={getTooltip(propsParam)}
        >
          {triggerElement}
        </RBOverlayTrigger>
      ) : (
        <RBOverlay
          target={target ? target.current : null}
          show={props.show}
          placement={props.placement}
        >
          {getTooltip(propsParam)}
        </RBOverlay>
      )}
    </>
  );
};
