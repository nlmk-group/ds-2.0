import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTruckLorryFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22.667 9.667h4l4 5.408V23h-2.714a4.667 4.667 0 0 1-9.24 0h-6.76a4.667 4.667 0 0 1-9.24 0h-1.38V7a1.333 1.333 0 0 1 1.334-1.333h18.666A1.333 1.333 0 0 1 22.667 7v2.667Zm0 2.666v4H28v-.38l-2.677-3.62h-2.656Z"
      />
    </svg>
  );
};

export default IconTransportCarTruckLorryFilled32;
