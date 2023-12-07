import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Notifications32: FC<IIconsProps> = ({
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
        d="M16 29C17.5125 29 18.75 27.8 18.75 26.3334H13.25C13.25 27.8 14.4875 29 16 29ZM24.25 21V14.3334C24.25 10.24 22.0088 6.81335 18.0625 5.90667V5C18.0625 3.89334 17.1413 3 16 3C14.8587 3 13.9375 3.89334 13.9375 5V5.90667C10.005 6.81335 7.74999 10.2267 7.74999 14.3334V21L5 23.6667V25H27V23.6667L24.25 21ZM22.1875 22.6667H9.81248V14.3334C9.81248 10.6667 12.3906 7.71667 16 7.71667C19.6094 7.71667 22.1875 10.6667 22.1875 14.3334V22.6667Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Notifications32;
