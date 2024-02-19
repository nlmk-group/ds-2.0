import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftUpFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.368 4.287a1 1 0 0 0-1.403 0L3.3 10.85a1 1 0 0 0 .7 1.713h5.667v.883c0 2.166 0 3.854.112 5.209.114 1.376.35 2.497.872 3.505a8.939 8.939 0 0 0 3.935 3.875c1.02.512 2.152.742 3.546.855 1.374.11 3.088.11 5.29.11H28a1 1 0 1 0 0-2h-4.533c-2.257 0-3.89 0-5.174-.104-1.274-.102-2.117-.3-2.81-.648a6.94 6.94 0 0 1-3.056-3.008c-.35-.676-.551-1.5-.655-2.75-.104-1.263-.105-2.868-.105-5.09v-.838h5.666a1 1 0 0 0 .702-1.712l-6.667-6.563Z"
      />
    </svg>
  );
};

export default IconCornerArrowLeftUpFilled32;
