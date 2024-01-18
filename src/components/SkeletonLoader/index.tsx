import React, { FC } from 'react';

import clsx from 'clsx';

import { ISkeletonLoading } from './types';

import styles from './SkeletonLoader.module.scss';

const SkeletonLoader: FC<ISkeletonLoading> = ({ id, className, count = 1, width = '200px', height = '100px' }) => {
  return (
    <span id={id} className={clsx('skeleton-loading', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span className={styles['loading-wrapper']} key={i} style={{ width, height }}>
          &zwnj;
        </span>
      ))}
    </span>
  );
};

export default SkeletonLoader;
