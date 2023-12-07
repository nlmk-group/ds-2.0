import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Settings24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M5.25 15.75V17.25H9.75V15.75H5.25ZM5.25 6.75V8.25H12.75V6.75H5.25ZM12.75 18.75V17.25H18.75V15.75H12.75V14.25H11.25V18.75H12.75ZM8.25 9.75V11.25H5.25V12.75H8.25V14.25H9.75V9.75H8.25ZM18.75 12.75V11.25H11.25V12.75H18.75ZM14.25 9.75H15.75V8.25H18.75V6.75H15.75V5.25H14.25V9.75Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Settings24;
