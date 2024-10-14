import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInsurance24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 5h-2a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2Zm-2-2a4 4 0 0 0-4 4H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4a4 4 0 0 0-4-4h-2ZM8 9h12v10H4V9h4Zm3 8v-2H9v-2h2v-2h2v2h2v2h-2v2h-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInsurance24;
