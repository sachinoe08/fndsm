import React from 'react';
import { Pagination as RBPagination, PaginationProps as RBPaginationProps } from 'react-bootstrap';

import './pagination.scss';

export interface PaginationProps extends RBPaginationProps {
  currentPage: number;
  lastPage: number;
  ofLabel: string;
  previousFunction: (event: React.MouseEvent<HTMLElement>) => void;
  nextFunction: (event: React.MouseEvent<HTMLElement>) => void;
}

import './pagination.scss';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  ofLabel,
  lastPage,
  previousFunction,
  nextFunction,
  ...props
}) => {
  return (
    <>
      <RBPagination {...props}>
        {currentPage > 1 ? (
          <RBPagination.Prev className={`previous-page`} onClick={previousFunction} />
        ) : (
          ''
        )}
        <RBPagination.Item className={`page-display`}>
          {currentPage} {ofLabel} {lastPage}
        </RBPagination.Item>
        {currentPage < lastPage ? (
          <RBPagination.Next className={`next-page`} onClick={nextFunction} />
        ) : (
          ''
        )}
      </RBPagination>
    </>
  );
};
