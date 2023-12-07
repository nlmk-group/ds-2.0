import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconCloseOutlined32: FC<IIconsProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.943 16.2571L7.00013 23.2L8.80013 25L15.743 18.0571L16 17.8001L16.2571 18.0572L23.2 25L25 23.2L18.0571 16.2572L17.8 16.0001L18.0573 15.7429L18.6358 15.1643L25.0001 8.8L23.2001 7L16.2573 13.9429L16 14.2001L15.7429 13.9429L15.1643 13.3643L8.8 7.00004L7 8.80004L13.9429 15.7429L14.2 16.0001L13.943 16.2571Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCloseOutlined32;
