import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNewAppointments24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15 14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10ZM5 14h8V4H5v10Zm11-7v10H8a1 1 0 1 0 0 2h8a2 2 0 0 0 2-2V7a1 1 0 1 0-2 0Zm3 3v10h-8a1 1 0 1 0 0 2h8a2 2 0 0 0 2-2V10a1 1 0 1 0-2 0Zm-8-2H7V6h4v2Zm-1 3H7V9h3v2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNewAppointments24;
