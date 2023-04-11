import React from 'react';

export interface CommonCardProps {
  id?: string;
  className?: string;
  title: string;
  selected?: boolean;
}
export interface CustomCardProps extends CommonCardProps {
  imageUrl?: string;
  featured?: boolean;
  promoText?: string;
  freeText?: string;
  currencyCode?: string;
  locale?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}
