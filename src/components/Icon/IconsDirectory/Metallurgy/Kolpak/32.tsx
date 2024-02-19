import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKolpak32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.247 9.513a3.214 3.214 0 1 0-4.494 0l-9.528 5.201h-.01V25.43H1v2.142h5.357V16.857h19.286v10.714H31V25.43h-3.214V14.714h-.011l-9.528-5.201ZM16 8.286a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconKolpak32;
