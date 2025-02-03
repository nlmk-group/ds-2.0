import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnfoldMore16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m8 15-4-3.52 1.289-1.134L8 12.732l2.711-2.386L12 11.48 8 15ZM5.289 5.654 4 4.52 8 1l4 3.52-1.289 1.134L8 3.268 5.289 5.654Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUnfoldMore16;
