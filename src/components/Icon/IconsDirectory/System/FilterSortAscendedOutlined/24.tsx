import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterSortAscendedOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 18v-2h18v2H3ZM3 6h6v2H3V6Zm12 5H3v2h12v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFilterSortAscendedOutlined24;
