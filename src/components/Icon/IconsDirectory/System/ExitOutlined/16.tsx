import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconExitOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.333 2h5.334C9.4 2 10 2.6 10 3.335v2.663H8.667V3.32H3.333v9.364h5.334v-2.683H10v2.676C10 13.413 9.4 14 8.667 14H3.333A1.327 1.327 0 0 1 2 12.678V3.335C2 2.594 2.6 2 3.333 2Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M11.333 10.67 14 8l-2.667-2.67v2.003H6v1.334h5.333v2.003Z" />
    </svg>
  );
};

export default IconExitOutlined16;
