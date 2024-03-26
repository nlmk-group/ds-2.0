import React, { FC } from 'react';

import { TIconContainer } from '@components/Icon/subcomponent/IconContainer/types';
import clsx from 'clsx';

import styles from './IconContainer.module.scss';

const IconContainer: FC<TIconContainer> = ({ containerSize = 24, children, className, style }) => {
  const classes = clsx(styles[`container${containerSize}` as keyof typeof styles], styles.container, className);
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default IconContainer;
