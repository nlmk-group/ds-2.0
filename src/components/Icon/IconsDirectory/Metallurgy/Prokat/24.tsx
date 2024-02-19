import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProkat24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.552 2.75h13.5v15.14l2.25 1.36v1.5h-18v-1.5l2.25-1.36V2.75Zm.651 16.5h12.2l-3.842-2.327-.008-5.173h-4.51v5.172l-3.84 2.328Zm9.857-3.173-.007-4.327h1.5v5.231l-1.493-.904ZM17.552 4.25v6h-10.5v-6h10.5Zm-10.5 12.732V11.75h1.492v4.328l-1.492.904Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconProkat24;
