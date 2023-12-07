import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFullscreen24: FC<IIconsProps> = ({
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
        d="M7 10H5V5H10V7H7V10ZM5 14H7V17H10V19H5V14ZM17 17H14V19H19V14H17V17ZM14 7V5H19V10H17V7H14Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullscreen24;
