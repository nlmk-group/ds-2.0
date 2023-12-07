import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconMarkUnreadMailboxOutlined24: FC<IIconsProps> = ({
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
        d="M18.7273 7.90909H10.5455V9.54545H18.7273V19.3636H5.63636V9.54545H7.27273V12.8182H8.90909V6.27273H13.8182V3H7.27273V7.90909H5.63636C4.73636 7.90909 4 8.64545 4 9.54545V19.3636C4 20.2636 4.73636 21 5.63636 21H18.7273C19.6273 21 20.3636 20.2636 20.3636 19.3636V9.54545C20.3636 8.64545 19.6273 7.90909 18.7273 7.90909Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMarkUnreadMailboxOutlined24;
