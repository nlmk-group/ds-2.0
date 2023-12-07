import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconSortAscended24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.07715 18V16H21.0771V18H3.07715ZM3.07715 6H9.07715V8H3.07715V6ZM15.0771 11H3.07715V13H15.0771V11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSortAscended24;
