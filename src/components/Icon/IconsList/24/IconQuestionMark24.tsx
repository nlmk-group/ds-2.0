import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconQuestionMark24: FC<IIconsProps> = ({
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
        d="M11.0691 12.85C11.8391 11.46 13.3191 10.64 14.1791 9.41C15.0891 8.12 14.5791 5.71 11.9991 5.71C10.3091 5.71 9.47906 6.99 9.12906 8.05L6.53906 6.96C7.24906 4.83 9.17906 3 11.9891 3C14.3391 3 15.9491 4.07 16.7691 5.41C17.4691 6.56 17.8791 8.71 16.7991 10.31C15.5991 12.08 14.4491 12.62 13.8291 13.76C13.5791 14.22 13.4791 14.52 13.4791 16H10.5891C10.5791 15.22 10.4591 13.95 11.0691 12.85ZM13.9991 20C13.9991 21.1 13.0991 22 11.9991 22C10.8991 22 9.99906 21.1 9.99906 20C9.99906 18.9 10.8991 18 11.9991 18C13.0991 18 13.9991 18.9 13.9991 20Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconQuestionMark24;
