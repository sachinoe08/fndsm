import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { Button } from '../Button';
import { IconPlus, IconMinus, IconChevronRight, IconCheck } from '../Icons';
import { Card } from './Card';
import { CustomCardProps } from './CustomCardProps';
import { PriceFormat } from './PriceFormat';
import './ProductImageCard.scss';

export interface ProductImageCardProps extends CustomCardProps {
  price: number;
  withCounter?: boolean;
  count?: number;
  minCount?: number;
  maxCount?: number;
  borderOnHover?: boolean;
  plusClickHandler?: (event?: React.MouseEvent<HTMLElement>) => void;
  minusClickHandler?: (event?: React.MouseEvent<HTMLElement>) => void;
}

export const ProductImageCard: FC<ProductImageCardProps> = ({
  imageUrl,
  title,
  price,
  count = 0,
  currencyCode = 'USD',
  promoText = '',
  freeText = '',
  withCounter = false,
  featured = false,
  selected = false,
  locale = 'en-US',
  className,
  minCount,
  maxCount,
  borderOnHover = false,
  onClick,
  plusClickHandler,
  minusClickHandler,
  ...props
}) => {
  const borderColor = featured ? 'pink' : selected ? 'primary' : '';
  const disabledPlusButton = maxCount !== undefined && maxCount > count ? false : true;
  const disabledMinusButton = minCount !== undefined && minCount < count ? false : true;

  const detailsButton = (
    <div className="product-details_button">
      <div
        className="button-container"
        tabIndex={disabledMinusButton ? undefined : 0}
        onKeyPress={(event) => {
          if (event.key === 'Enter' && minusClickHandler && !disabledMinusButton) {
            minusClickHandler();
          }
        }}
        onClick={() => {
          if (minusClickHandler && !disabledMinusButton) {
            minusClickHandler();
          }
        }}
      >
        <Button
          tabIndex={-1}
          className="details-button"
          variant="light"
          disabled={disabledMinusButton}
        >
          <span className={`icon-minus ${disabledMinusButton ? '' : `primary-color`}`}>
            <IconMinus />
          </span>
        </Button>
      </div>
      <input className="details-input" type="text" value={count} readOnly />
      <div
        className="button-container"
        tabIndex={disabledPlusButton ? undefined : 0}
        onKeyPress={(event) => {
          if (event.key === 'Enter' && plusClickHandler && !disabledPlusButton) {
            plusClickHandler();
          }
        }}
        onClick={() => {
          if (plusClickHandler && !disabledPlusButton) {
            plusClickHandler();
          }
        }}
      >
        <Button
          tabIndex={-1}
          className="details-button"
          variant="light"
          disabled={disabledPlusButton}
        >
          <span className={`icon-plus ${disabledPlusButton ? '' : 'primary-color'}`}>
            <IconPlus />
          </span>
        </Button>
      </div>
    </div>
  );

  const iconPlus = (
    <span className="icon-plus">
      <IconPlus />
    </span>
  );

  const iconChevron = (
    <span className="icon-chevron primary-color">
      <IconChevronRight />
    </span>
  );

  const iconCheck = (
    <span className="icon-check">
      <IconCheck />
    </span>
  );

  const promo = <p className="product-promo-text p-0 mb-1 text-wrap">{promoText}</p>;

  const onKeyPressHandler = (event: any) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div
      {...props}
      tabIndex={withCounter ? undefined : 0}
      className={`product-image-container ${className}`}
      onKeyPress={onKeyPressHandler}
      onClick={onClick}
    >
      <Card
        boxShadow={true}
        borderRadius="md"
        borderOnHover={borderOnHover}
        border={borderColor}
        noPadding
      >
        <Row className="px-2 py-3 m-0">
          {featured && promo}
          <div className="product-image-card p-0">
            <div className="image-container">
              <div>
                <img className="card-image" src={imageUrl} />
              </div>
            </div>
            <div className="product-details">
              <p className="product-details_label text-center mb-0">{title}</p>
              <div className="product-details_price">
                {!withCounter && price !== 0 && iconPlus}
                <span>
                  {price <= 0 ? (
                    freeText
                  ) : (
                    <PriceFormat price={price} currencyCode={currencyCode} locale={locale} />
                  )}
                </span>
                {!withCounter && !selected && iconChevron}
                {!withCounter && selected && iconCheck}
              </div>
              {withCounter && detailsButton}
            </div>
          </div>
        </Row>
      </Card>
    </div>
  );
};
