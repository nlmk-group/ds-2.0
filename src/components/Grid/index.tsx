import React from 'react';

import Box from '@components/Box';
import { IGrid, IGridSize } from '@components/Grid/types';

import styles from './Grid.module.scss';

import { GridColumn, GridRow } from './subcomponents';

const updateRootVars = (gap: number | string) => {
  const root = document.documentElement
  root.style.setProperty('--gap', `${gap}px`)
}

const Grid = ({ children, container, size, gap = 0, ...props }: IGrid) => {
  const classNames = [styles.grid];

  if (container) {
    classNames.push(styles.container);
    updateRootVars(gap)
  }

  const sizes = typeof size === 'number' ? { xs: size } : size || {};

  Object.keys(sizes).forEach(breakpoint => {
    const value = sizes[breakpoint as keyof IGridSize];
    if (value) {
      classNames.push(`${styles[`${breakpoint}-${value}`]}`);
    }
  });

  return (
    <Box  
      className={classNames.join(' ')}
      gap={gap}
      {...props}
    >
      {children}
    </Box>
  );
};

Grid.Column = GridColumn;
Grid.Row = GridRow;

export default Grid;
