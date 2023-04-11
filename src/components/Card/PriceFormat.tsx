import React from 'react';
import { FC } from 'react';

interface PriceFormatProps {
  locale: string;
  currencyCode: string;
  price: number;
}
export const PriceFormat: FC<PriceFormatProps> = ({ locale, currencyCode, price }) => {
  const localeValue = locale === 'en-US' && currencyCode === 'CAD' ? 'en-CA' : locale;
  return (
    <>
      {new Intl.NumberFormat(localeValue, {
        style: 'currency',
        currency: currencyCode,
      }).format(price)}
    </>
  );
};
