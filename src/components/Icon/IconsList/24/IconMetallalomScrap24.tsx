import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMetallalomScrap24: FC<IIconsProps> = ({
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
        d="M11.25 4.75H9V3.25H15V4.75H12.75V7.75H16.8105L21.0606 12L17.5303 15.5302L16.4697 14.4695L18.9392 12L16.1892 9.25H7.81055L5.06057 12L7.53029 14.4695L6.46967 15.5302L2.93921 12L7.18923 7.75H11.25V4.75Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 20.75H2V19.25H4.67404L10.274 13.25H13.7259L19.3259 19.25H22V20.75ZM17.274 19.25H6.72587L10.9259 14.75H13.074L17.274 19.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetallalomScrap24;
