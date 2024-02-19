import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMixerFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.35 8.504V5.689a2.884 2.884 0 0 0-.454 5.476A2.885 2.885 0 0 0 10.04 6.46l.92-.92a4.185 4.185 0 0 1 0 5.918l1.07 1.07a5.7 5.7 0 0 0 0-8.057l.918-.92a7 7 0 0 1 .872 8.837 6.995 6.995 0 0 1-8.496 2.576A7 7 0 0 1 3.56 3.09a6.996 6.996 0 0 1 3.79-1.558v-.036h1.3v7.008a.65.65 0 0 1-1.3 0Z"
      />
    </svg>
  );
};

export default IconMixerFilled16;
