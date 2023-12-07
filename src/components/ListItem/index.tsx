import React, { FC } from 'react';

import { IListItemProps } from '@components/ListItem/types';
import clsx from 'clsx';

import styles from './ListItem.module.scss';

const ListItem: FC<IListItemProps> = ({ children, className, ...props }) => (
  <div className={clsx(styles.item, className)} title={typeof children === 'string' ? children : undefined} {...props}>
    {children}
  </div>
);

export default ListItem;
