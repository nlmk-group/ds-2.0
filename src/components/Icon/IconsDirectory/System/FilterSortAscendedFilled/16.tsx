import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

export const IconFilterSortAscendedFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.5 12.5h-13v-2.333h13V12.5ZM10.5 9.167h-9V6.833h9v2.334ZM6.5 5.833h-5V3.5h5v2.333Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFilterSortAscendedFilled16;
