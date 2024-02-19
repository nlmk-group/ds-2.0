import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowRightFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M26.697 16.5 15.791 5.283l-2.553 2.626 6.554 6.741H4.5v3.7h15.292l-6.554 6.741 2.553 2.626L26.697 16.5Z"
      />
    </svg>
  );
};

export default ArrowRightFilled32;
