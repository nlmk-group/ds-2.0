import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAddComment24: FC<IIconsProps> = ({
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
        d="M11.325 13.8H12.675V10.875H15.6V9.525H12.675V6.6H11.325V9.525H8.4V10.875H11.325V13.8ZM3 21V4.35C3 4.005 3.135 3.69375 3.405 3.41625C3.675 3.13875 3.99 3 4.35 3H19.65C19.995 3 20.3062 3.13875 20.5837 3.41625C20.8612 3.69375 21 4.005 21 4.35V16.05C21 16.395 20.8612 16.7062 20.5837 16.9837C20.3062 17.2612 19.995 17.4 19.65 17.4H6.6L3 21ZM4.35 17.7375L6.0375 16.05H19.65V4.35H4.35V17.7375ZM4.35 4.35V17.7375V4.35Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAddComment24;
