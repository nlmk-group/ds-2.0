import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconDeleteMinusOutlined24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M14 9H8.85714H7.14286H2V7H7.14286H6.71429H8.42857H8.85714H14V9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDeleteMinusOutlined24;
