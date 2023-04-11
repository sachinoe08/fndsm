import React from 'react';
import {
  default as RBAccordion,
  AccordionProps as RBAccordionProps,
} from 'react-bootstrap/Accordion';
import { AccordionItemProps as RBAccordionItemProps } from 'react-bootstrap/AccordionItem';

import './Accordion.scss';

export interface AccordionItemProps extends RBAccordionItemProps {
  header: React.ReactNode;
  body: React.ReactNode;
}

export interface AccordionProps extends RBAccordionProps {
  items: AccordionItemProps[];
  borderRadius?: string;
  boxShadow?: boolean;
  bottomMargin?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  boxShadow,
  borderRadius,
  bottomMargin,
  ...props
}) => {
  return (
    <RBAccordion {...props}>
      {items.map(({ header, body, ...item }) => {
        return (
          <RBAccordion.Item
            {...item}
            key={item.eventKey}
            className={
              item.className +
              (borderRadius ? ` accordion-item-border-radius-${borderRadius}` : '') +
              (boxShadow ? ' accordion-item-box-shadow' : '') +
              (bottomMargin ? ` accordion-item-bottom-margin-${bottomMargin}` : '')
            }
          >
            <RBAccordion.Header>{header}</RBAccordion.Header>
            <RBAccordion.Body>{body}</RBAccordion.Body>
          </RBAccordion.Item>
        );
      })}
    </RBAccordion>
  );
};
