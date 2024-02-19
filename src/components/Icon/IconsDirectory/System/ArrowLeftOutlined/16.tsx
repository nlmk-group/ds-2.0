import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowLeftOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.632 7.357H14v1.286H5.632L9.32 12.09l-.974.91L3 8l5.347-5 .973.909-3.688 3.448Z"
      />
    </svg>
  );
};

export default ArrowLeftOutlined16;
