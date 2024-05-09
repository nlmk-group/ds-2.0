import React from 'react';

import Box from '@components/Box';
import { IGrid } from '@components/Grid/types';

import { GridColumn, GridRow } from './subcomponents';

const Grid = ({ children, ...props }: IGrid) => {
  return <Box {...props}>{children}</Box>;
};

Grid.Column = GridColumn;
Grid.Row = GridRow;

export default Grid;
