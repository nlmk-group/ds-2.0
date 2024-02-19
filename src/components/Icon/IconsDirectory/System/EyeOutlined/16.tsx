import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 2a7.336 7.336 0 0 1 7.213 6A7.336 7.336 0 0 1 .787 8 7.336 7.336 0 0 1 8 2Zm0 10.667A6.004 6.004 0 0 0 13.851 8 6.004 6.004 0 0 0 2.15 8 6.003 6.003 0 0 0 8 12.667ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-1.333a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
      />
    </svg>
  );
};

export default IconEyeOutlined16;
