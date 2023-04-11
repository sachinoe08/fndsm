import React from 'react';
import {
  Carousel as RBCarousel,
  CarouselProps as RBCarouselProps,
  CarouselItemProps as RBCarouselItemProps,
} from 'react-bootstrap';
import './carousel.scss';
export interface CarouselItemProps extends RBCarouselItemProps {
  key: string;
  children: React.ReactNode;
}

export interface CarouselProps extends RBCarouselProps {
  items: CarouselItemProps[];
}

export const Carousel: React.FC<CarouselProps> = ({ items, ...props }) => {
  return (
    <RBCarousel {...props}>
      {items.map(({ children, ...carouselItem }) => {
        return <RBCarousel.Item {...carouselItem}>{children}</RBCarousel.Item>;
      })}
    </RBCarousel>
  );
};
