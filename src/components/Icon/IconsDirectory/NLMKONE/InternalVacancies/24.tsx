import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInternalVacancies24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm8 6a8 8 0 1 0-3.094 6.32l5.887 5.887 1.414-1.414-5.887-5.887A7.965 7.965 0 0 0 18 10Zm-8-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm3 7v-2H7v2h6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInternalVacancies24;
