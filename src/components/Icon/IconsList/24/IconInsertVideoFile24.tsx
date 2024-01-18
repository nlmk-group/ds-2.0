import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconInsertVideoFile24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 8V20C20 21.1 19.1 22 18 22H5.99C4.89 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H14L20 8ZM5.99 20H18L18 9H13V4L5.99 4L5.99 20ZM9 16.4641L15 13L9 9.5359L9 16.4641Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInsertVideoFile24;
