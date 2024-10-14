import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInMachineFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14 13H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1Zm-3.375-7.5L7.437 8.688 5.5 6.75l-.875.875 2.75 2.75H7.5l4-4-.875-.875ZM14.5 2h-13a.5.5 0 1 1 0-1h13a.5.5 0 0 1 0 1Zm-13 12h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInMachineFilled16;
