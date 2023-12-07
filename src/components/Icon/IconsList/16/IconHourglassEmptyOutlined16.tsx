import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHourglassEmptyOutlined16: FC<IIconsProps> = ({
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
        d="M4 1V5.2H4.007L4 5.207L6.8 8L4 10.8L4.007 10.807H4V15H12.4V10.807H12.393L12.4 10.8L9.6 8L12.4 5.207L12.393 5.2H12.4V1H4ZM11 11.15V13.6H5.4V11.15L8.2 8.35L11 11.15ZM8.2 7.65L5.4 4.85V2.4H11V4.85L8.2 7.65Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHourglassEmptyOutlined16;
