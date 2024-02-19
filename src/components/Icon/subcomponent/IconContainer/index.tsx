import React, { FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './IconContainer.module.scss';

const IconContainer: FC<{
  containerSize: 32 | 24 | 16;
  children: ReactNode;
}> = ({ containerSize = 24, children }) => {
  const classes = clsx(styles[`container${containerSize}` as keyof typeof styles], styles.container);
  return <div className={classes}>{children}</div>;
};

export default IconContainer;
