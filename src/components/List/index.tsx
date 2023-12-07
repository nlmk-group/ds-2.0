import React, { FC } from 'react';

import { IListProps } from '@components/List/types';
import clsx from 'clsx';

import styles from './List.module.scss';

const List: FC<IListProps> = ({ children, className, ...props }) => (
  <div className={clsx(styles.list, className)} {...props}>
    {children}
  </div>
);

export default List;
