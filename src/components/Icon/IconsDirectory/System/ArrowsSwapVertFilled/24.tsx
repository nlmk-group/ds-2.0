import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsSwapVertFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 1a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3Zm6 2L5 6.99h3V14h2V6.99h3L9 3Zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsSwapVertFilled24;
