import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUploadOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.25 21c-.619 0-1.148-.22-1.588-.66A2.168 2.168 0 0 1 3 18.75v-2.375a1 1 0 0 1 1-1h.25a1 1 0 0 1 1 1v1.375a1 1 0 0 0 1 1h11.5a1 1 0 0 0 1-1v-1.375a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v2.375a2.17 2.17 0 0 1-.66 1.59 2.17 2.17 0 0 1-1.59.66H5.25Zm6.625-4.5a1 1 0 0 1-1-1V7.331L8.67 9.537a1 1 0 0 1-1.427-.013l-.185-.192A1 1 0 0 1 7.07 7.93l4.223-4.223a1 1 0 0 1 1.414 0L16.93 7.93a1 1 0 0 1 .012 1.402l-.185.192a1 1 0 0 1-1.427.013L13.125 7.33v8.17a1 1 0 0 1-1 1h-.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUploadOutlined24;
