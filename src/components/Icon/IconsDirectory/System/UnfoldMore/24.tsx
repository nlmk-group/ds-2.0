import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnfoldMore24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m12 22-5-5.028 1.611-1.62L12 18.76l3.389-3.408L17 16.972 12 22ZM8.611 8.648 7 7.028 12 2l5 5.028-1.611 1.62L12 5.24 8.611 8.648Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUnfoldMore24;
