import React from 'react';
import { Carousel, CarouselProps } from './Carousel';
import { Carousel as RBCarousel } from 'react-bootstrap';
import { Button } from '../Button';

import { Meta, Story } from '@storybook/react';
export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: 'select',
    },
  },
} as Meta;

const Template: Story<CarouselProps> = (args) => (
  <div className="container">
    <Carousel {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      key: '1',
      children: (
        <>
          <img
            src={'https://www.zennioptical.com/marketing/hp/tiles/freeshipping_1Tile-lg.jpg'}
            className="d-block w-100 h-100"
            alt="First slide"
          />
          <RBCarousel.Caption>
            <div>
              <h2 className="display-5 pt-1 pt-sm-5">
                H2 header text <span className="d-none d-sm-block">goes here</span>
              </h2>
              <p>
                Body text goes here. Body text goes here
                <span className="d-none d-sm-block">Body text goes here. Body text goes here</span>
              </p>
              <Button className="d-none d-sm-block" variant="outline-dark">
                GET STARTED
              </Button>
            </div>
          </RBCarousel.Caption>
        </>
      ),
    },
    {
      key: '2',
      children: (
        <>
          <img
            src={'https://www.zennioptical.com/marketing/hp/tiles/freeshipping_1Tile-lg.jpg'}
            className="d-block w-100 h-100"
            alt="First slide"
          />
          <RBCarousel.Caption>
            <div>
              <h2 className="display-5 pt-1 pt-sm-5">
                H2 header text <span className="d-none d-sm-block">goes here</span>
              </h2>
              <p>
                Body text goes here. Body text goes here
                <span className="d-none d-sm-block">Body text goes here. Body text goes here</span>
              </p>
              <Button className="d-none d-sm-block" variant="primary">
                GET STARTED
              </Button>
            </div>
          </RBCarousel.Caption>
        </>
      ),
    },
  ],
};
