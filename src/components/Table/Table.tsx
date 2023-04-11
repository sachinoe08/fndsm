import React from 'react';
import { default as RBTable, TableProps as RBTableProps } from 'react-bootstrap/Table';

import './table.scss';

export interface TableProps extends RBTableProps {
  theader?: React.ReactNode;
  tbody?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ theader, tbody, variant = 'light', ...props }) => {
  return (
    <RBTable variant={variant} {...props}>
      {/* eslint-disable-next-line sonarjs/no-identical-expressions */}
      {theader && theader}
      {/* eslint-disable-next-line sonarjs/no-identical-expressions */}
      {tbody && tbody}
    </RBTable>
  );
};
