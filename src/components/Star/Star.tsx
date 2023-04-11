import React, { FC } from 'react';
import classNames from 'classnames';

import './Star.scss';

export interface IStarProps {
  value: number;
  maxValue?: number;
}

const Star: FC<IStarProps> = ({ value, maxValue = 5 }: IStarProps) => {
  const createStars = () => {
    const stars = [];
    const newValue = Number(value) ? value : 0;
    const integerValue = Math.floor(newValue);
    let remainder = (Number(newValue.toFixed(1)) * 10) % 10;

    for (let i = 1; i <= maxValue; i++) {
      const percent = i <= integerValue ? 10 : remainder;
      if (percent !== 10) remainder = 0;
      stars.push(<div key={i} className={classNames('star-item', `star-percent-${percent}`)} />);
    }
    return stars;
  };

  return <div className="star-component">{createStars()}</div>;
};

export { Star };
