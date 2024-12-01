import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRCMParallelOperation24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7.33 1.5 11.997 6 7.33 10.5V7.125H1.504v-2.25H7.33V1.5ZM17.838 13.5l4.667 4.5-4.667 4.5v-3.375h-5.826v-2.25h5.826V13.5ZM12 13.167c.619 0 1.125.525 1.125 1.166 0 .642-.506 1.167-1.125 1.167s-1.125-.525-1.125-1.167c0-.641.506-1.166 1.125-1.166ZM12 8.5c.619 0 1.125.525 1.125 1.167 0 .641-.506 1.166-1.125 1.166s-1.125-.525-1.125-1.166c0-.642.506-1.167 1.125-1.167Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRCMParallelOperation24;
