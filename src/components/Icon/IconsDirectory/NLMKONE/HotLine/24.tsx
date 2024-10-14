import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHotLine24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M20.454 7.628c-.65-3.76-3.93-6.63-7.87-6.63h-1c-3.94 0-7.22 2.87-7.87 6.63-1.56.85-2.63 2.48-2.63 4.37v1c0 2.76 2.24 5 5 5 1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2-.05 0-.1.01-.16.02.82-2.33 3.04-4.02 5.66-4.02h1c2.61 0 4.83 1.68 5.66 4.02-.05 0-.1-.02-.16-.02-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h.09a3.083 3.083 0 0 1-2.78 1.93l-.63.02a2 2 0 0 0-1.68-.93h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2c.76 0 1.42-.44 1.76-1.07h.6c2.55-.07 4.63-2 4.92-4.51 1.61-.83 2.72-2.49 2.72-4.42v-1c0-1.89-1.07-3.52-2.63-4.37v-.02Zm-14.37 8.37c-1.65 0-3-1.35-3-3v-1c0-1.65 1.35-3 3-3v7Zm15-3c0 1.65-1.35 3-3 3v-7c1.65 0 3 1.35 3 3v1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHotLine24;
