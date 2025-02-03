import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const UnfoldLess16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.244 15 4 13.775l4-3.938 4 3.938L10.756 15 8 12.287 5.244 15ZM8 6.162 4 2.225 5.244 1 8 3.712 10.756 1 12 2.225 8 6.162Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default UnfoldLess16;
