import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMetallalomScrapFilled24: FC<IIconsProps> = ({
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
        d="M11.25 4.75H9V3.25H15V4.75H12.75V7.75H16.8107L21.0607 12L17.5304 15.5302L16.4698 14.4695L18.9393 12L16.1894 9.25H7.81067L5.06069 12L7.53041 14.4695L6.46979 15.5302L2.93933 12L7.18935 7.75H11.25V4.75Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 20.75H2V19.25H4.67404L10.274 13.25H13.7259L19.3259 19.25H22V20.75Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetallalomScrapFilled24;
