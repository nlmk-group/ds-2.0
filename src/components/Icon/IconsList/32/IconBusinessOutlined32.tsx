import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconBusinessOutlined32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M16.3333 9.33333V4H3V28H29.6667V9.33333H16.3333ZM8.33333 25.3333H5.66667V22.6667H8.33333V25.3333ZM8.33333 20H5.66667V17.3333H8.33333V20ZM8.33333 14.6667H5.66667V12H8.33333V14.6667ZM8.33333 9.33333H5.66667V6.66667H8.33333V9.33333ZM13.6667 25.3333H11V22.6667H13.6667V25.3333ZM13.6667 20H11V17.3333H13.6667V20ZM13.6667 14.6667H11V12H13.6667V14.6667ZM13.6667 9.33333H11V6.66667H13.6667V9.33333ZM27 25.3333H16.3333V22.6667H19V20H16.3333V17.3333H19V14.6667H16.3333V12H27V25.3333ZM24.3333 14.6667H21.6667V17.3333H24.3333V14.6667ZM24.3333 20H21.6667V22.6667H24.3333V20Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBusinessOutlined32;
