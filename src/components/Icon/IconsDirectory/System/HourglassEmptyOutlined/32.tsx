import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHourglassEmptyOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9 4v7.2h.012L9 11.212 13.8 16 9 20.8l.012.012H9V28h14.4v-7.188h-.012l.012-.012-4.8-4.8 4.8-4.788-.012-.012h.012V4H9Zm12 17.4v4.2h-9.6v-4.2l4.8-4.8 4.8 4.8Zm-4.8-6-4.8-4.8V6.4H21v4.2l-4.8 4.8Z"
      />
    </svg>
  );
};

export default IconHourglassEmptyOutlined32;
