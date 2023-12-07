import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconArrowBottom16: FC<IIconsProps> = ({
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
        d="M8.6857 10.7814L12.3638 7.20541L13.3333 8.14808L8 13.3334L2.66667 8.14808L3.63624 7.20541L7.31431 10.7814V2.66675H8.6857V10.7814Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M1.33334 12.6667H14.6667V14.0001H1.33334V12.6667Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconArrowBottom16;
