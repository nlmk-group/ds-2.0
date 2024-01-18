import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Search24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M10.7329 16.144C11.9561 16.144 13.084 15.7485 14.0068 15.0894L17.4785 18.561C17.6396 18.7222 17.8521 18.8027 18.0791 18.8027C18.5552 18.8027 18.8921 18.4365 18.8921 17.9678C18.8921 17.748 18.8188 17.543 18.6577 17.3818L15.208 13.9248C15.9331 12.9727 16.3652 11.7935 16.3652 10.5117C16.3652 7.41357 13.8311 4.87939 10.7329 4.87939C7.63477 4.87939 5.10059 7.41357 5.10059 10.5117C5.10059 13.6099 7.63477 16.144 10.7329 16.144ZM10.7329 14.9282C8.31592 14.9282 6.31641 12.9287 6.31641 10.5117C6.31641 8.09473 8.31592 6.09521 10.7329 6.09521C13.1499 6.09521 15.1494 8.09473 15.1494 10.5117C15.1494 12.9287 13.1499 14.9282 10.7329 14.9282Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Search24;
