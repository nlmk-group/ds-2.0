import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconLotokFilled32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      fill="none"
      viewBox="0 0 32 33"
      className={classes}
    >
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 10.35h2.336l3 12h17.328l3-12H30v-1.7H2v1.7ZM12.506 27a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm11.988 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};

export default IconLotokFilled32;
