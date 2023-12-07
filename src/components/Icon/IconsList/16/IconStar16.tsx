import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconStar16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M14.667 6.493 9.873 6.08 8 1.667l-1.873 4.42-4.794.406 3.64 3.154-1.093 4.686L8 11.847l4.12 2.486-1.087-4.686 3.634-3.154Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStar16;
