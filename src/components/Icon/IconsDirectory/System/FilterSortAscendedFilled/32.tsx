import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterSortAscendedFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M31.5 26.5H.5v-4.333h31V26.5ZM21.5 18.167H.5v-4.334h21v4.334ZM11.5 9.833H.5V5.5h11v4.333Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFilterSortAscendedFilled32;
