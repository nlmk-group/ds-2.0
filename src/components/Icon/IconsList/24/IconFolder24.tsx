import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFolder24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12 7.5H18C18.825 7.5 19.5 8.175 19.5 9V16.5C19.5 17.325 18.825 18 18 18H6C5.175 18 4.5 17.325 4.5 16.5L4.5075 7.5C4.5075 6.675 5.175 6 6 6H10.5L12 7.5ZM6 9V16.5H18V9H6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolder24;
