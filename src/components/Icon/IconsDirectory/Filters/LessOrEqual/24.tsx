import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLessOrEqual24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 20.108H5.28V17.96H19v2.148ZM19 17 5 10l14-7v2.57L10.141 10 19 14.43V17Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLessOrEqual24;
