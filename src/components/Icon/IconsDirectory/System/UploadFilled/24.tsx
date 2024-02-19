import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUploadFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.25 22c-.619 0-1.148-.22-1.588-.66A2.168 2.168 0 0 1 3 19.75v-3.375h2.25v3.375h13.5v-3.375H21v3.375a2.17 2.17 0 0 1-.66 1.59 2.17 2.17 0 0 1-1.59.66H5.25Zm5.625-4.5V9.625h-4.5L12 4l5.625 5.625h-4.5V17.5h-2.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUploadFilled24;
