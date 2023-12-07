import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconPushPinFilled24: FC<IIconsProps> = ({
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
        d="M16.0771 9V4H17.0771C17.6271 4 18.0771 3.55 18.0771 3C18.0771 2.45 17.6271 2 17.0771 2H7.07715C6.52715 2 6.07715 2.45 6.07715 3C6.07715 3.55 6.52715 4 7.07715 4H8.07715V9C8.07715 10.66 6.73715 12 5.07715 12V14H11.0471V21L12.0471 22L13.0471 21V14H19.0771V12C17.4171 12 16.0771 10.66 16.0771 9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPushPinFilled24;
