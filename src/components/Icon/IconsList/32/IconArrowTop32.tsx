import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconArrowTop32: FC<IIconsProps> = ({
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
        d="M17.2857 11.2635V28H14.7143V11.2635L7.81795 18.639L6 16.6947L16 6L26 16.6947L24.1821 18.639L17.2857 11.2635Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M2.66667 4H29.3333V6.66667H2.66667V4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconArrowTop32;
