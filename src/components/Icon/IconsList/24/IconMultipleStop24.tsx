import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMultipleStop24: FC<IIconsProps> = ({
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
        d="M17 4.5L21 8.5L17 12.5V9.5H13V7.5H17V4.5ZM10 7.5C9.45 7.5 9 7.95 9 8.5C9 9.05 9.45 9.5 10 9.5C10.55 9.5 11 9.05 11 8.5C11 7.95 10.55 7.5 10 7.5ZM6 7.5C5.45 7.5 5 7.95 5 8.5C5 9.05 5.45 9.5 6 9.5C6.55 9.5 7 9.05 7 8.5C7 7.95 6.55 7.5 6 7.5ZM7 17.5H11V15.5H7V12.5L3 16.5L7 20.5V17.5ZM14 17.5C14.55 17.5 15 17.05 15 16.5C15 15.95 14.55 15.5 14 15.5C13.45 15.5 13 15.95 13 16.5C13 17.05 13.45 17.5 14 17.5ZM18 17.5C18.55 17.5 19 17.05 19 16.5C19 15.95 18.55 15.5 18 15.5C17.45 15.5 17 15.95 17 16.5C17 17.05 17.45 17.5 18 17.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMultipleStop24;
