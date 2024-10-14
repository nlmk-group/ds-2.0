import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStructure24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M2 4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2h6V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V8h-2v8h2v-2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2h-3a1 1 0 0 1-1-1V8H9v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Zm15 5V5h3v4h-3ZM4 5v4h3V5H4Zm16 14h-3v-4h3v4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStructure24;
