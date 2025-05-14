import React, { FC } from 'react';

import clsx from 'clsx';

import { ISkeletonLoadingProps } from './types';

import styles from './SkeletonLoader.module.scss';

const SkeletonLoader: FC<ISkeletonLoadingProps> = ({
  id,
  className,
  animation = 'wave',
  count = 1,
  width = '200px',
  height = '100px'
}) => {
  return (
    <span id={id} className={clsx('skeleton-loading', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          className={clsx(styles['loading-wrapper'], styles[`loading-wrapper_${animation}`])}
          key={i}
          style={{ width, height }}
        >
          &zwnj;
        </span>
      ))}
    </span>
  );
};

export default SkeletonLoader;
