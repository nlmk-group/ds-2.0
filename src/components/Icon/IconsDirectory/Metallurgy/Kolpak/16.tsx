import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKolpak16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.317 5.339a1.364 1.364 0 1 0-1.907 0L3.368 7.545h-.004v4.546H2V13h2.273V8.455h8.181V13h2.273v-.91h-1.363V7.546h-.005L9.317 5.34Zm-.953-.52a.455.455 0 1 0 0-.91.455.455 0 0 0 0 .91Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconKolpak16;
