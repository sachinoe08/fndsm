import React, { FC } from 'react';
import { Card } from './Card';
import './VerticalCard.scss';
import { IconCheck } from '../Icons';
import { CommonCardProps } from './CustomCardProps';

export interface VerticalCardProps extends CommonCardProps {
  imageUrl: string;
  disabled?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

export const VerticalCard: FC<VerticalCardProps> = ({
  imageUrl,
  title,
  disabled = false,
  selected = false,
  className = '',
  onClick,
  ...props
}) => {
  const checkIcon = (
    <div className="vertical-card_icon">
      <IconCheck />
    </div>
  );

  const borderColor = disabled ? '' : selected ? 'primary' : '';

  const onKeyPressHandler = (event: any) => {
    if (event.key === 'Enter' && onClick) {
      onClick(event);
    }
  };

  return (
    <div
      {...props}
      tabIndex={disabled ? undefined : 0}
      className={`vertical-card ${disabled ? '' : 'cursor-pointer'} ${className}`}
      onClick={onClick}
      onKeyPress={onKeyPressHandler}
    >
      <Card
        boxShadow={true}
        borderRadius="md"
        noPadding={true}
        disabled={disabled}
        borderOnHover={disabled ? false : true}
        border={borderColor}
      >
        {selected && !disabled && checkIcon}
        <img className="vertical-card_image" src={imageUrl} />
        <h6 className={`vertical-card_title text-wrap ${disabled ? 'vertical-card_disabled' : ''}`}>
          {title}
        </h6>
      </Card>
    </div>
  );
};
