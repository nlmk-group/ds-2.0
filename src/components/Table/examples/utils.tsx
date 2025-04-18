import React from 'react';

import { Typography } from '@components/index';
import { ColumnDef, flexRender } from '@tanstack/react-table';

export const getCellProps = (cell: any) => {
  const value = cell.getValue();

  if (value instanceof Date) {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return { text: date.toLocaleDateString() };
    }
  }

  if (typeof value === 'number') {
    return { number: value };
  }

  if (typeof value === 'string') {
    return { text: value };
  }

  return {
    children: (
      <Typography variant="Body1-Medium" color="var(--steel-90)">
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </Typography>
    )
  };
};

type TAlign = 'left' | 'right'

export const getCellAlign = <TData,>(columnDef: ColumnDef<TData>, index: number): TAlign => {
  return index === 0 || !columnDef.meta?.isNumeric ? 'left' : 'right';
};
