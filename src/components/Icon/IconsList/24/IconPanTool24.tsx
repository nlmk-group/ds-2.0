import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconPanTool24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <g clipPath="url(#clip0_7070_103644)">
        <path
          d="M18 24.5H11.45C10.37 24.5 9.31001 24.05 8.56001 23.27L1.26001 15.66L3.33001 13.83C3.95001 13.28 4.86001 13.17 5.59001 13.56L8.00001 14.84V5.29001C8.00001 3.91001 9.12001 2.79001 10.5 2.79001C10.67 2.79001 10.84 2.81001 11.01 2.84001C11.1 1.54001 12.18 0.51001 13.5 0.51001C14.36 0.51001 15.11 0.94001 15.56 1.60001C15.85 1.48001 16.17 1.42001 16.5 1.42001C17.88 1.42001 19 2.54001 19 3.92001V4.20001C19.16 4.17001 19.33 4.15001 19.5 4.15001C20.88 4.15001 22 5.27001 22 6.65001V20.5C22 22.71 20.21 24.5 18 24.5ZM4.14001 15.78L10 21.88C10.38 22.27 10.9 22.5 11.44 22.5H18C19.1 22.5 20 21.6 20 20.5V6.65001C20 6.37001 19.78 6.15001 19.5 6.15001C19.22 6.15001 19 6.37001 19 6.65001V12.5H17V3.92001C17 3.64001 16.78 3.42001 16.5 3.42001C16.22 3.42001 16 3.64001 16 3.92001V12.5H14V3.01001C14 2.73001 13.78 2.51001 13.5 2.51001C13.22 2.51001 13 2.73001 13 3.01001V12.5H11V5.29001C11 5.01001 10.78 4.79001 10.5 4.79001C10.22 4.79001 10 5.02001 10 5.29001V18.16L4.65001 15.33L4.14001 15.78V15.78Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="clip0_7070_103644">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconPanTool24;
