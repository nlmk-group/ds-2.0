import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInMachineFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M21 19.5H3A1.5 1.5 0 0 1 1.5 18V6A1.5 1.5 0 0 1 3 4.5h18A1.5 1.5 0 0 1 22.5 6v12a1.5 1.5 0 0 1-1.5 1.5ZM15.937 8.25l-4.78 4.781-2.907-2.906-1.313 1.313 4.125 4.124h.188l6-6-1.313-1.312ZM21.75 3H2.25a.75.75 0 0 1 0-1.5h19.5a.75.75 0 1 1 0 1.5ZM2.25 21h19.5a.75.75 0 1 1 0 1.5H2.25a.75.75 0 1 1 0-1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInMachineFilled24;
