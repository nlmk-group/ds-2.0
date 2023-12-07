import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMaxOrMin24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12.3246 12.9917L13.4996 11.8167L15.8333 14.1423V7.00065H17.5V14.1423L19.8167 11.8167L21 13L16.6667 17.334L12.3246 12.9917Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M11.6754 10.3423L10.5004 11.5173L8.16667 9.19167L8.16667 16.3333H6.5L6.5 9.19167L4.18333 11.5173L3 10.334L7.33333 6L11.6754 10.3423Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMaxOrMin24;
