import React from 'react';

import { Typography } from '@components/index';
import { flexRender } from '@tanstack/react-table';

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
