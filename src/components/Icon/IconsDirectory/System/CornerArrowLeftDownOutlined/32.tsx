import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftDownOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.422 4H28a1 1 0 1 1 0 2h-4.533c-2.257 0-3.89 0-5.174.104-1.274.102-2.117.3-2.81.648a6.939 6.939 0 0 0-3.056 3.008c-.35.676-.551 1.5-.655 2.75-.104 1.263-.105 2.868-.105 5.09v6.012l4.965-4.887a1 1 0 0 1 1.403 1.425l-6.667 6.563a1 1 0 0 1-1.403 0L3.298 20.15a1 1 0 0 1 1.404-1.425l4.965 4.887v-6.058c0-2.166 0-3.854.112-5.209.114-1.376.35-2.497.871-3.505a8.94 8.94 0 0 1 3.936-3.876c1.02-.51 2.152-.741 3.546-.853C19.506 4 21.22 4 23.422 4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowLeftDownOutlined32;
