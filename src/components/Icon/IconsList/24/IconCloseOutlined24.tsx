import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconCloseOutlined24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.455 12.2731L5.0002 17.7279L6.41441 19.1421L11.8692 13.6873L12.0712 13.4854L12.2731 13.6873L17.7279 19.1422L19.1421 17.728L13.6873 12.2731L13.4854 12.0712L13.6875 11.869L14.1421 11.4145L19.1423 6.41421L17.7281 5L12.2733 10.4548L12.0712 10.657L11.869 10.4549L11.4145 10.0003L6.41421 5.00003L5 6.41424L10.4548 11.8691L10.6569 12.0712L10.455 12.2731Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCloseOutlined24;
