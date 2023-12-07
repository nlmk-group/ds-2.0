import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconStarBorder24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.81 9.12L22 9.74L16.55 14.47L18.18 21.5L12 17.77L5.82 21.5L7.46 14.47L2 9.74L9.19 9.13L12 2.5L14.81 9.12ZM8.24 18.17L12 15.9L15.77 18.18L14.77 13.9L18.09 11.02L13.71 10.64L12 6.6L10.3 10.63L5.92 11.01L9.24 13.89L8.24 18.17Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStarBorder24;
