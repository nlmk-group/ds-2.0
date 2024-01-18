import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconInteraction32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.25 3H8.25C7.0125 3 6 4.08 6 5.4V24.6C6 25.92 7.00125 27 8.23875 27H21.75C22.9875 27 24 25.92 24 24.6V10.2L17.25 3ZM19.5 15H10.5V17.4H19.5V15ZM19.5 19.8H10.5V22.2H19.5V19.8ZM8.25 24.6H21.75V11.4H16.125V5.4H8.25V24.6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInteraction32;
