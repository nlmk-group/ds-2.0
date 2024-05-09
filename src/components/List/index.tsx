import React, { forwardRef } from 'react';

import { IListProps } from '@components/List/types';
import clsx from 'clsx';

import styles from './List.module.scss';

const List = forwardRef<HTMLDivElement, IListProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={clsx(styles.list, className)} {...props}>
    {children}
  </div>
));

export default List;
