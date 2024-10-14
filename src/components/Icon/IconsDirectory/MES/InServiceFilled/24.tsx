import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInServiceFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M20 9.458V20.75A1.25 1.25 0 0 1 18.75 22h-.5A1.25 1.25 0 0 1 17 20.75V9.458a4 4 0 0 1 0-7.416V6l1.502.75L20 6V2.042a4 4 0 0 1 0 7.416Zm-7.123-1.612a4.187 4.187 0 0 0-2.88.405A4.25 4.25 0 1 0 15 15.009v4.133a7.626 7.626 0 0 1-1.192.394L13.5 22h-3l-.308-2.467a7.708 7.708 0 0 1-2.235-.921l-2.035 1.582-2.121-2.121 1.585-2.038a7.707 7.707 0 0 1-.922-2.227L2 13.5v-3l2.464-.308c.19-.786.501-1.536.924-2.225l-1.587-2.04 2.12-2.122 2.04 1.587a7.697 7.697 0 0 1 2.231-.928L10.5 2h3l.046.366a6.005 6.005 0 0 0-.669 5.48Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInServiceFilled24;
