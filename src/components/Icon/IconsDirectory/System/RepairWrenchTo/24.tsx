import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRepairWrenchTo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.577 5.703 6.288 3.414 7.702 2 11.7 5.996l.707.707-.707.707-3.997 3.997-1.414-1.414 2.29-2.29H2v-2h6.577Zm12.316 3.949V9.65l-1.354 1.353-.091.092-1.323 1.322-1.413-1.412 1.323-1.323.091-.092 1.353-1.353h-.001a5.992 5.992 0 0 0-7.71.649 5.992 5.992 0 0 0-1.553 5.79l-1.978 1.978a2.997 2.997 0 1 0 4.238 4.239l1.978-1.978c2 .534 4.222.017 5.791-1.552a5.992 5.992 0 0 0 .65-7.711Zm-.901 3.727a3.992 3.992 0 0 1-5.023 3.604l-1.114-.298-.816.816-1.978 1.978a.997.997 0 1 1-1.41-1.41l1.978-1.979.816-.815-.298-1.115a3.992 3.992 0 0 1 3.604-5.022l-.453.452-1.414 1.415 1.414 1.414 1.413 1.413 1.414 1.414 1.414-1.414.453-.453Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRepairWrenchTo24;
