import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProkatFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.552 3.25h13.5v15.14l2.25 1.36v1.5h-18v-1.5l2.25-1.36V3.25ZM16.06 16.577l-.007-4.327h1.5v5.231l-1.493-.904ZM17.552 4.75v6h-10.5v-6h10.5Zm-10.5 12.732V12.25h1.492v4.328l-1.492.904Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconProkatFilled24;
