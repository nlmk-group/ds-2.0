import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconEdit24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3688 3.29L20.7088 5.63C21.0988 6.02 21.0988 6.65 20.7088 7.04L18.8788 8.87L15.1288 5.12L16.9588 3.29C17.1488 3.1 17.3988 3 17.6588 3C17.9188 3 18.1688 3.09 18.3688 3.29ZM2.99878 17.25V21H6.74878L17.8088 9.94L14.0588 6.19L2.99878 17.25ZM5.91878 19H4.99878V18.08L14.0588 9.02L14.9788 9.94L5.91878 19Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEdit24;
