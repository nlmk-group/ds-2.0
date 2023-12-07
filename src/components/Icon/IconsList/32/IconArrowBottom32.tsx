import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconArrowBottom32: FC<IIconsProps> = ({
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
        d="M17.3714 21.5626L24.7275 14.4106L26.6667 16.2959L16 26.6666L5.33333 16.2959L7.27248 14.4106L14.6286 21.5626V5.33325H17.3714V21.5626Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M2.66666 25.3333H29.3333V27.9999H2.66666V25.3333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconArrowBottom32;
