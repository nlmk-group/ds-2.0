import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconInput24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M21 3.01001H3C1.9 3.01001 1 3.91001 1 5.01001V9.00001H3V4.99001H21V19.02H3V15H1V19.01C1 20.11 1.9 20.99 3 20.99H21C22.1 20.99 23 20.11 23 19.01V5.01001C23 3.90001 22.1 3.01001 21 3.01001Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M11 16L15 12L11 8V11H1V13H11V16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInput24;
