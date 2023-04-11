import React from 'react';

import './backTop.scss';

export interface BackTopProps {
  visibilityHeight?: number;
  children?: React.ReactNode;
  horizontal?: string;
  isBackTopFix?: boolean;
}

export const BackTop: React.FC<BackTopProps> = (props) => {
  const {
    children = (
      <>
        <i className="fa fa-chevron-down"></i>
        Top
      </>
    ),
    horizontal = 'left',
    isBackTopFix,
  } = props;
  const handleClick = () => {
    window && window.scrollTo(0, 0);
  };

  return isBackTopFix ? (
    <div className="back-top" style={{ [horizontal]: '20px' }} onClick={handleClick}>
      {children}
    </div>
  ) : null;
};
