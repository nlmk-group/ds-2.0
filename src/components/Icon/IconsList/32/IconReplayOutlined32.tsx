import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconReplayOutlined32: FC<IIconsProps> = ({
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
        d="M8.5 8.5L16 16V10C20.965 10 25 14.035 25 19C25 23.965 20.965 28 16 28C11.035 28 7 23.965 7 19H4C4 25.63 9.37 31 16 31C22.63 31 28 25.63 28 19C28 12.37 22.63 7 16 7V1L8.5 8.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReplayOutlined32;
