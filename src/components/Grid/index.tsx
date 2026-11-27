import React from 'react';

import Box from '@components/Box';
import { IGrid } from '@components/Grid/types';
import clsx from 'clsx';

import styles from './Grid.module.scss';

import { GridColumn, GridRow } from './subcomponents';

const Grid = ({ children, container, size, gap, className, st, ...props }: IGrid) => {
  if (container) {
    const gutter = typeof gap === 'number' ? `${gap}px` : (gap ?? '0px');
    return (
      <Box
        {...props}
        className={clsx(styles.grid, styles.container, className)}
        gap={0}
        st={{ '--grid-gap': gutter, ...st } as React.CSSProperties}
      >
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
      <Box {...props} className={clsx(classNames, className)} gap={gap} st={st}>
        {children}
      </Box>
    );
  }

  return (
    <Box {...props} className={className} gap={gap} st={st}>
      {children}
    </Box>
  );
};

Grid.Column = GridColumn;
Grid.Row = GridRow;

export default Grid;
