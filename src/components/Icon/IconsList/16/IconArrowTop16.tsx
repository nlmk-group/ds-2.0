import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconArrowTop16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M8.64284 5.63175V14H7.35716V5.63175L3.90897 9.3195L3 8.34737L8 3L13 8.34737L12.091 9.3195L8.64284 5.63175Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M1.33333 2H14.6667V3.33333H1.33333V2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconArrowTop16;
