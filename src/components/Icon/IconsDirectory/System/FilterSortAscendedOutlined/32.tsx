import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterSortAscendedOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 26v-3.333h30V26H1ZM1 6h10v3.333H1V6Zm20 8.333H1v3.334h20v-3.334Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFilterSortAscendedOutlined32;
