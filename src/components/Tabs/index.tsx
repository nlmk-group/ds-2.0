import React, { FC } from 'react';

import { ITabs } from './types';

import styles from './Tabs.module.scss';

import clsx from 'clsx';

const Tabs: FC<ITabs> = ({ children, className }) => {
  return <div className={clsx(styles['tabs-wrapper'], className)}>{children}</div>;
};

export default Tabs;
