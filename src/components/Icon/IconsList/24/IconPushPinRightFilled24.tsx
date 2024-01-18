import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconPushPin24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M22 21L22 3L18 3L18 11.5858L12 5.58579L12 10L2 10L2 14L12 14L12 18.4142L18 12.4142L18 21L22 21Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPushPin24;
