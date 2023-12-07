import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Education24: FC<IIconsProps> = ({
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
        d="M12 4.5L3 9.5L6.27273 11.3167V16.3167L12 19.5L17.7273 16.3167V11.3167L19.3636 10.4083V16.1667H21V9.5L12 4.5ZM17.58 9.5L12 12.6L6.42 9.5L12 6.4L17.58 9.5ZM16.0909 15.325L12 17.6L7.90909 15.325V12.225L12 14.5L16.0909 12.225V15.325Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Education24;
