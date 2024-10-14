import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBookingWorkplaces24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M8 2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8Zm0 2h8v5H8V4Zm5 8v1h9v9h-2v-7H10v7H8v-1H4v1H2v-9h9v-1h2Zm-5 6v1H4v-1h4Zm-4-3v1h4v-1H4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBookingWorkplaces24;
