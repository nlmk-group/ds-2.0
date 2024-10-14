import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEditorialContests24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M7 3a1 1 0 0 0-1 1v2H4a1 1 0 0 0-1 1v2a4 4 0 0 0 3.8 3.995 6.02 6.02 0 0 0 3.199 2.663 1.44 1.44 0 0 1-1.09 1.334A1.2 1.2 0 0 0 8 18.156V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.844a1.2 1.2 0 0 0-.909-1.164 1.44 1.44 0 0 1-1.09-1.334 6.02 6.02 0 0 0 3.2-2.663A4 4 0 0 0 21 9V7a1 1 0 0 0-1-1h-2V4a1 1 0 0 0-1-1H7Zm11 5v2c0 .257-.016.51-.048.76A2 2 0 0 0 19 9V8h-1ZM5 8h1v2c0 .257.016.51.048.76A2 2 0 0 1 5 9V8Zm7.003 8h-.026A3.442 3.442 0 0 1 10 18.72V20h4v-1.28A3.442 3.442 0 0 1 12.024 16h-.02Zm0-2A4 4 0 0 0 16 10V5H8v5a4 4 0 0 0 3.997 4h.006Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEditorialContests24;
