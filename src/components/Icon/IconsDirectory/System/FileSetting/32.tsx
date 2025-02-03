import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInstruction32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7.25 3h7.25v9H23v3.062A8.069 8.069 0 0 0 22 15c-1.255 0-2.443.29-3.5.804V15h-9v2.4h6.787a8.01 8.01 0 0 0-1.621 2.4H9.5v2.4h4.54a7.963 7.963 0 0 0 1.03 4.8H7.24C6 27 5 25.92 5 24.6V5.4C5 4.08 6.013 3 7.25 3Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M16.5 3.267 22.813 10H16.5V3.267Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.291 17.126a6.633 6.633 0 0 0-2.583.002 2.399 2.399 0 0 1-1.234 1.716 2.64 2.64 0 0 1-2.182.156A5.96 5.96 0 0 0 16 21.126c.6.455.95 1.144.948 1.874.001.728-.348 1.418-.947 1.872.271.787.71 1.51 1.29 2.128a2.64 2.64 0 0 1 2.183.156c.666.364 1.12.997 1.235 1.718a6.633 6.633 0 0 0 2.583-.002c.115-.72.57-1.352 1.234-1.716A2.64 2.64 0 0 1 26.708 27 5.96 5.96 0 0 0 28 24.874 2.352 2.352 0 0 1 27.052 23a2.352 2.352 0 0 1 .947-1.874A5.927 5.927 0 0 0 26.709 19a2.64 2.64 0 0 1-2.183-.157 2.398 2.398 0 0 1-1.235-1.717ZM23.894 23c0 .994-.848 1.8-1.894 1.8-1.046 0-1.894-.806-1.894-1.8s.848-1.8 1.894-1.8c1.046 0 1.894.806 1.894 1.8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInstruction32;
