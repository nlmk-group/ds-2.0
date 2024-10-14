import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStrategy24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M17 21v-6H9c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 7 13V6.8l-2 2-1.4-1.4L8 3l4.4 4.4L11 8.8l-2-2V13h8c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v6h-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStrategy24;
