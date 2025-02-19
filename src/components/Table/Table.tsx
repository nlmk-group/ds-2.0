import React from 'react';

import clsx from 'clsx';

import { ITableProps } from './types';

import styles from './Table.module.scss';

const Table = ({
  children,
  horizontalBorders = true,
  verticalBorders = false,
  className,
  style,
  ...restProps
}: ITableProps) => {
  return (
    <div className={styles.table}>
      <table
        style={{
          width: style?.width || '100%',
          ...style
        }}
        className={clsx(
          styles.table,
          horizontalBorders && styles['horizontal-borders'],
          verticalBorders && styles['vertical-borders'],
          className
        )}
        {...restProps}
      >
        {children}
      </table>
    </div>
  );
};

export default Table;
