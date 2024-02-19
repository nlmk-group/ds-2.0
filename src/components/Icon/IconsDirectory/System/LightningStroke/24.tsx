import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLightningStroke24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12.214 9.857h5.715l-7.822 10.16.964-6.731H6.5L10.107 3h5.143l-3.036 6.857Z"
      />
    </svg>
  );
};

export default IconLightningStroke24;
