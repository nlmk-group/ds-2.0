import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPromotions24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10 3V1H8v2H7a5 5 0 0 0-5 5v9a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5h-1V1h-2v2h-4Zm4 4V5h-4v2H8V5H7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-1v2h-2Zm-2.793 9.707 6-6-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3 3a1 1 0 0 0 1.414 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPromotions24;
