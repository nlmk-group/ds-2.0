import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDarkMode24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M10.0275 7.1325C9.8925 7.6125 9.825 8.115 9.825 8.625C9.825 11.685 12.315 14.175 15.375 14.175C15.885 14.175 16.3875 14.1075 16.8675 13.9725C16.0875 15.8925 14.1975 17.25 12 17.25C9.105 17.25 6.75 14.895 6.75 12C6.75 9.8025 8.1075 7.9125 10.0275 7.1325ZM12 5.25C8.2725 5.25 5.25 8.2725 5.25 12C5.25 15.7275 8.2725 18.75 12 18.75C15.7275 18.75 18.75 15.7275 18.75 12C18.75 11.655 18.72 11.31 18.675 10.98C17.94 12.0075 16.74 12.675 15.375 12.675C13.14 12.675 11.325 10.86 11.325 8.625C11.325 7.2675 11.9925 6.06 13.02 5.325C12.69 5.28 12.345 5.25 12 5.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDarkMode24;
