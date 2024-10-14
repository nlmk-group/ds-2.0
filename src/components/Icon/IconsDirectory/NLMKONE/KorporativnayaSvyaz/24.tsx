import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKorporativnayaSvyaz24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15 12h-3V9c.833 0 1.542.292 2.125.875S15 11.167 15 12Zm4 0h-2c0-1.383-.488-2.563-1.463-3.538C14.562 7.487 13.383 7 12 7V5c1.95 0 3.604.679 4.963 2.037C18.321 8.396 19 10.05 19 12Zm-7-9V1c1.517 0 2.942.288 4.275.863 1.333.575 2.5 1.362 3.5 2.362s1.787 2.167 2.362 3.5C22.712 9.058 23 10.483 23 12h-2c0-1.25-.237-2.42-.712-3.512a9.164 9.164 0 0 0-1.925-2.851 9.168 9.168 0 0 0-2.85-1.925A8.716 8.716 0 0 0 12 3Zm-4 .048a2 2 0 0 0-2 2v13.904a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4.951h2v4.951a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5.048a4 4 0 0 1 4-4h2v2H8ZM11 19v-2h2v2h-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKorporativnayaSvyaz24;
