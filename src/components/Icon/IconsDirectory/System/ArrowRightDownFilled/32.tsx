import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowRightDownFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M20.838 18.248 9.882 7.293l-2.589 2.59L18.25 20.837H8.86V24.5H24.5V8.86h-3.662v9.389Z"
      />
    </svg>
  );
};

export default IconArrowRightDownFilled32;
