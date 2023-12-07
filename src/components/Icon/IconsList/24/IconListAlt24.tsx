import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconListAlt24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM9 7H7V9H9V7ZM17 7H11V9H17V7ZM17 11H11V13H17V11ZM11 15H17V17H11V15ZM7 11H9V13H7V11ZM9 15H7V17H9V15ZM5 19H19V5H5V19Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconListAlt24;
