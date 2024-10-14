import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDocument24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.01 4.098a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12.317l-.294.293-6.01 6-.292.292H6.01a3 3 0 0 1-3-3V4.098Zm3-1a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1H13v-3a3 3 0 0 1 3-3h3.01V4.098a1 1 0 0 0-1-1h-12ZM17.593 17H16a1 1 0 0 0-1 1v1.589L17.592 17ZM8 7h8v2H8V7Zm6 4h-6v2h6v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDocument24;
