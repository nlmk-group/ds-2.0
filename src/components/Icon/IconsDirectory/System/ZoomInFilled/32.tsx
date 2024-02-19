import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZoomInFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m24.042 22.156 5.71 5.71-1.886 1.886-5.71-5.71a11.946 11.946 0 0 1-7.489 2.625c-6.624 0-12-5.376-12-12s5.376-12 12-12 12 5.376 12 12a11.947 11.947 0 0 1-2.625 7.49Zm-10.708-8.823h-4V16h4v4H16v-4h4v-2.667h-4v-4h-2.666v4Z"
      />
    </svg>
  );
};

export default IconZoomInFilled32;
