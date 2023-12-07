import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChevronArrowUpFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M25.721 19.182 16.5 10.306l-9.22 8.876 2.609 2.512L16.5 15.33l6.611 6.364 2.61-2.512Z"
      />
    </svg>
  );
};

export default IconChevronArrowUpFilled32;
