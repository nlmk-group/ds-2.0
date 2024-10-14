import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKlubOtvetstvennyhRoditelej24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M7.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM1 14.333c0-2.54 1.525-4.707 3.71-5.72A3.5 3.5 0 1 1 7.5 10C4.985 10 3 11.969 3 14.333V16h3.197a5.796 5.796 0 0 0-.992 2H2a1 1 0 0 1-1-1v-2.667ZM16.634 17.5c.231.62.36 1.291.366 2h5a1 1 0 0 0 1-1v-2.182c0-2.077-1.201-3.856-2.942-4.749a3 3 0 1 0-2.166 1.406c1.77.188 3.108 1.637 3.108 3.343V17.5h-4.366ZM17.5 9a1 1 0 0 0-.214 1.977.999.999 0 0 1 .214-.023c.093 0 .186.002.278.007A1 1 0 0 0 17.5 9ZM11 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 5.05 2.19c1.161.678 1.95 1.916 1.95 3.356V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.454c0-1.44.789-2.678 1.95-3.356A2.992 2.992 0 0 1 8 14Zm3 3.637c-1.134 0-2 .883-2 1.909V20h4v-.454c0-1.026-.866-1.91-2-1.91Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKlubOtvetstvennyhRoditelej24;
