import React, { forwardRef } from 'react';

import Scrollbar from '@components/Scrollbar';
import clsx from 'clsx';

import { IListProps } from './types';

import styles from './List.module.scss';

const List = forwardRef<HTMLDivElement, IListProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={clsx(styles.list, className)} {...props}>
    <Scrollbar overflowY="auto" style={{ maxHeight: 'inherit' }}>
      {children}
    </Scrollbar>
  </div>
));

List.displayName = 'List';

export default List;
