import React, { FC } from 'react';
import { Card } from './Card';
import { Col } from 'react-bootstrap';
import { IconCheck, IconChevronRight, IconPlus } from '../Icons';
import { CustomCardProps } from './CustomCardProps';
import { PriceFormat } from './PriceFormat';
import './ProductCard.scss';

export interface ProductCardProps extends CustomCardProps {
  text?: string;
  brandName?: string;
  price?: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  imageUrl = '',
  title,
  price,
  text = '',
  promoText = '',
  brandName = '',
  freeText = '',
  currencyCode = 'USD',
  selected = false,
  featured = false,
  className = '',
  locale = 'en-US',
  onClick,
  ...props
}) => {
  const borderColor = featured ? 'pink' : selected ? 'primary' : '';

  const headerPrice = (priceValue: number, currencyCodeValue: string, locale: string) => (
    <div className="header-price">
      {priceValue !== 0 && (
        <span className="header-price_icon">
          <IconPlus />
        </span>
      )}
      <span className="header-price_value">
        {priceValue <= 0 ? (
          freeText
        ) : (
          <PriceFormat price={priceValue} currencyCode={currencyCodeValue} locale={locale} />
        )}
      </span>
    </div>
  );

  const productIcon = (
    <div className="product-card_icon">
      <img src={imageUrl} />
    </div>
  );

  const promo = <p className="product-card_promo text-wrap">{promoText}</p>;

  const brand = <h5 className="product-card_brand text-wrap">{brandName}</h5>;

  const onKeyPressHandler = (event: any) => {
    if (event.key === 'Enter' && onClick) {
      onClick(event);
    }
  };

  return (
    <div
      {...props}
      tabIndex={0}
      className={`product-container ${className}`}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
    >
      <Card
        boxShadow={true}
        borderRadius="md"
        noPadding={true}
        border={borderColor}
        borderOnHover={true}
      >
        <div className="product-card">
          {imageUrl.trim().length > 0 && productIcon}
          <Col className="p-0 m-0">
            {featured && promo}
            {brandName.trim().length > 0 && brand}
            <div className="product-card_header">
              <h6 className="header-title text-wrap">{title}</h6>
              {price !== undefined && headerPrice(price, currencyCode, locale)}
              <div className={`header-icon ${selected && 'success-icon'}`}>
                {selected && <IconCheck />}
                {!selected && <IconChevronRight />}
              </div>
            </div>
            {text.trim().length > 0 && <p className="product-card_text text-wrap">{text}</p>}
          </Col>
        </div>
      </Card>
    </div>
  );
};
