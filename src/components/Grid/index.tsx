import React from 'react';

import Box from '@components/Box';
import { IGrid } from '@components/Grid/types';
import clsx from 'clsx';

import styles from './Grid.module.scss';

import { GridColumn, GridRow } from './subcomponents';

const updateRootVars = (gap: number | string) => {
  const root = document.documentElement;
  const gapValue = typeof gap === 'number' ? gap : parseInt(gap.toString()) || 0;
  root.style.setProperty('--gap', `${gapValue}px`);
};

const Grid = ({ children, container, size, gap = 0, ...props }: IGrid) => {
  if (container) {
    updateRootVars(gap);

    return (
      <Box className={clsx(styles.grid, styles.container)} {...props}>
        {children}
      </Box>
    );
  }

  if (size) {
    const classNames = [styles.grid];
    const sizes = typeof size === 'number' ? { xs: size } : size || {};

    Object.entries(sizes).forEach(([breakpoint, value]) => {
      if (value) {
        classNames.push(styles[`${breakpoint}-${value}`]);
      }
    });

    return (
      <Box className={clsx(classNames)} {...props}>
        {children}
      </Box>
    );
  }

  return <Box {...props}>{children}</Box>;
};

Grid.Column = GridColumn;
Grid.Row = GridRow;

export default Grid;
