import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconApplications32: FC<IIconsProps> = ({
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
        d="M4 8C4 6.89333 4.86919 6 5.94595 6C7.0227 6 7.89189 6.89333 7.89189 8C7.89189 9.10667 7.0227 10 5.94595 10C4.86919 10 4 9.10667 4 8ZM4 16C4 14.8933 4.86919 14 5.94595 14C7.0227 14 7.89189 14.8933 7.89189 16C7.89189 17.1067 7.0227 18 5.94595 18C4.86919 18 4 17.1067 4 16ZM5.94595 22C4.86919 22 4 22.9067 4 24C4 25.0933 4.88216 26 5.94595 26C7.00973 26 7.89189 25.0933 7.89189 24C7.89189 22.9067 7.0227 22 5.94595 22ZM28 25.3333H9.83784V22.6667H28V25.3333ZM9.83784 17.3333H28V14.6667H9.83784V17.3333ZM9.83784 9.33333V6.66667H28V9.33333H9.83784Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconApplications32;
