import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconNotificationsBellOffFilled16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M7.33333 15C8.06667 15 8.66667 14.4 8.66667 13.6667H6C6 14.4 6.59333 15 7.33333 15ZM11.3333 7.66667C11.3333 5.62 10.24 3.90667 8.33333 3.45333V2H6.33333V3.45333C6.17333 3.49333 6.02 3.55333 5.87333 3.60667L11.3333 9.06667V7.66667ZM2.94 2.56667L2 3.50667L3.87333 5.38C3.52667 6.04667 3.33333 6.82 3.33333 7.66667V11L2 12.3333V13H11.4933L12.6533 14.16L13.5933 13.22L2.94 2.56667Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNotificationsBellOffFilled16;
