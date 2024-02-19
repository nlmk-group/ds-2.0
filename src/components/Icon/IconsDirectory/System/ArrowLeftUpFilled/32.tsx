import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowLeftUpFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M23.141 7.5H7.5v15.641h3.662v-9.39l10.956 10.956 2.59-2.589L13.75 11.162h9.39V7.5Z"
      />
    </svg>
  );
};

export default ArrowLeftUpFilled32;
