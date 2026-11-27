import React from 'react';

import Typography from '@components/Typography';
import { flexRender } from '@tanstack/react-table';

import { ECellStatus } from '../Cell/types';
import { statusLabels } from './constants';

export const getCellProps = (cell: any) => {
  const value = cell.getValue();

  if (value instanceof Date) {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return { text: date.toLocaleDateString('ru-RU') };
    }
  }

  if (typeof value === 'number') {
    return { number: value };
  }

  if (typeof value === 'string') {
    const status = cell.column.id === 'status' && Object.prototype.hasOwnProperty.call(statusLabels, value);
    return { text: status ? statusLabels[value as ECellStatus] : value };
  }

  return {
    children: (
      <Typography variant="Body1-Medium" color="var(--steel-90)">
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </Typography>
    )
  };
};
