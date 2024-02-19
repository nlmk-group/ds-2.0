import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZoomInOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m24.042 22.156 5.71 5.71-1.886 1.886-5.71-5.71a11.946 11.946 0 0 1-7.489 2.625c-6.624 0-12-5.376-12-12s5.376-12 12-12 12 5.376 12 12a11.947 11.947 0 0 1-2.625 7.49Zm-2.675-.99a9.303 9.303 0 0 0 2.633-6.5 9.33 9.33 0 0 0-9.333-9.333 9.33 9.33 0 0 0-9.333 9.334A9.33 9.33 0 0 0 14.667 24a9.303 9.303 0 0 0 6.5-2.633l.2-.2Zm-8.033-7.833v-4H16v4h4V16h-4v4h-2.666v-4h-4v-2.667h4Z"
      />
    </svg>
  );
};

export default IconZoomInOutlined32;
