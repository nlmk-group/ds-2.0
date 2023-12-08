import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDNS24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M19 15V19H5V15H19ZM20 13H4C3.45 13 3 13.45 3 14V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V14C21 13.45 20.55 13 20 13ZM7 18.5C6.18 18.5 5.5 17.83 5.5 17C5.5 16.17 6.18 15.5 7 15.5C7.82 15.5 8.5 16.17 8.5 17C8.5 17.83 7.83 18.5 7 18.5ZM19 5V9H5V5H19ZM20 3H4C3.45 3 3 3.45 3 4V10C3 10.55 3.45 11 4 11H20C20.55 11 21 10.55 21 10V4C21 3.45 20.55 3 20 3ZM7 8.5C6.18 8.5 5.5 7.83 5.5 7C5.5 6.17 6.18 5.5 7 5.5C7.82 5.5 8.5 6.18 8.5 7C8.5 7.82 7.83 8.5 7 8.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDNS24;