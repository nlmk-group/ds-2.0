import React, { forwardRef } from 'react';

import { IListItemProps } from '@components/ListItem/types';
import clsx from 'clsx';

import styles from './ListItem.module.scss';

const ListItem = forwardRef<HTMLDivElement, IListItemProps>(({ children, className, title, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(styles.item, className)}
    title={title || (typeof children === 'string' ? children : undefined)}
    {...props}
  >
    {children}
  </div>
));

ListItem.displayName = 'ListItem';

export default ListItem;
