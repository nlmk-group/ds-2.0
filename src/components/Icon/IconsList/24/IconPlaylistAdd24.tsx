import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconPlaylistAdd24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5.5H14V7.5H2V5.5ZM2 9.5H14V11.5H2V9.5ZM18 9.5H16V13.5H12V15.5H16V19.5H18V15.5H22V13.5H18V9.5ZM10 15.5H2V13.5H10V15.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPlaylistAdd24;
