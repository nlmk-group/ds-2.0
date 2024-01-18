import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterPanel24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7778 3H4.22222C3 3 2 3.9 2 5V19C2 20.1 3 21 4.22222 21H19.7778C21 21 22 20.1 22 19V5C22 3.9 21 3 19.7778 3ZM20 19H4V5H20V19ZM16 13V11L8 11V13H16ZM18 7V9L6 9V7L18 7ZM14 17V15H10V17H14Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterPanel24;
