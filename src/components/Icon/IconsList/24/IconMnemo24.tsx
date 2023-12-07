import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMnemo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M22 3H2V9H4V16H2V22H8V16H6V9H18V16H16V22H22V16H20V9H22V3ZM20 7V5H4V7H20ZM4 18V20H6V18H4ZM18 20V18H20V20H18Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 11H15V17H9V11ZM11 13V15H13V13H11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMnemo24;
