import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSearchFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m24.041 22.156 5.711 5.71-1.887 1.886-5.709-5.71a11.946 11.946 0 0 1-7.49 2.625c-6.623 0-12-5.376-12-12s5.377-12 12-12c6.625 0 12 5.376 12 12a11.946 11.946 0 0 1-2.625 7.489Z"
      />
    </svg>
  );
};

export default IconSearchFilled32;
