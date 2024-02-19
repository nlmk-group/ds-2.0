import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHandPanToolPalmsOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.528 23h-5.684a3.42 3.42 0 0 1-2.508-1.128L3 14.893l1.797-1.678a1.665 1.665 0 0 1 1.961-.248l2.092 1.174V5.383c0-1.265.972-2.292 2.17-2.292.147 0 .294.018.442.046C11.54 1.945 12.477 1 13.623 1c.746 0 1.397.394 1.788 1 .252-.11.53-.165.816-.165 1.197 0 2.17 1.027 2.17 2.292v.257a2.25 2.25 0 0 1 .433-.046c1.198 0 2.17 1.027 2.17 2.293v12.7C21 21.359 19.447 23 17.528 23ZM5.5 15.003l5.085 5.594c.33.358.781.569 1.25.569h5.693c.955 0 1.736-.825 1.736-1.834V6.63c0-.257-.19-.459-.434-.459-.243 0-.434.202-.434.459v5.364h-1.735V4.127c0-.257-.191-.458-.434-.458s-.434.201-.434.458v7.868h-1.736V3.293c0-.257-.191-.459-.434-.459s-.434.202-.434.459v8.702h-1.736V5.383c0-.256-.19-.458-.434-.458-.243 0-.434.21-.434.458v11.803L5.942 14.59l-.442.412Z"
      />
    </svg>
  );
};

export default IconHandPanToolPalmsOutlined24;
