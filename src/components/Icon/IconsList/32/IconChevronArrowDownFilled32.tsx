import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChevronArrowDownFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m25.721 12.818-2.61-2.512L16.5 16.67l-6.611-6.364-2.61 2.512 9.221 8.876 9.221-8.876Z"
      />
    </svg>
  );
};

export default IconChevronArrowDownFilled32;
