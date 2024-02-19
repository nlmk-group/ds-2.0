import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTruckLorryFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.333 5.333h2l2 2.704V12h-1.356a2.333 2.333 0 0 1-4.62 0h-3.38a2.333 2.333 0 0 1-4.62 0h-.69V4a.667.667 0 0 1 .666-.667h9.334a.667.667 0 0 1 .666.667v1.333Zm0 1.334v2H14v-.19l-1.339-1.81h-1.328Z"
      />
    </svg>
  );
};

export default IconTransportCarTruckLorryFilled16;
