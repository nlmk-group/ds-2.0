import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabTrack16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M1.6 7.5a.6.6 0 0 0 0 1.2h12.73a.6.6 0 1 0 0-1.2H1.6Zm2.163 2.969a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M3.763 10.469a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0Zm8.4 0a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0Zm0 0a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0ZM4 5.5v-1h8v1H4zM4 7V6h8v1H4z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlabTrack16;
