import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowRightOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m20.976 15.15-7.04-7.241L15.79 6 26 16.5 15.791 27l-1.856-1.909 7.04-7.241H5v-2.7h15.976Z"
      />
    </svg>
  );
};

export default IconArrowRightOutlined32;
