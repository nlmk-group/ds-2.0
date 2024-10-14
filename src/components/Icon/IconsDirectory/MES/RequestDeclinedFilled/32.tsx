import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRequestDeclinedFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2Zm-15.877-4.891 1.768 1.767L16 22.768l4.109 4.108 1.767-1.767L17.768 21l4.108-4.109-1.767-1.767L16 19.232l-4.109-4.108-1.768 1.767L14.233 21l-4.11 4.109ZM11 12h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2Zm10-6H11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRequestDeclinedFilled32;
