import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPovyshenieEnergoeffektivnosti24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M19 8h-.003l.002.002V8Zm-4 0h2.583L13.5 12.085l-1.793-1.792a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 4 19h17v-2H6.414L11 12.414l1.793 1.793a1 1 0 0 0 1.414 0L19 9.412V12h2V7a1 1 0 0 0-1-1h-5v2ZM5 13V6H3v9l2-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPovyshenieEnergoeffektivnosti24;
