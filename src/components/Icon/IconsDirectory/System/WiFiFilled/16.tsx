import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWiFiFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M15.355 5.575a10.333 10.333 0 0 0-14.71 0l-.349.352 1.977 1.997.355-.36a7.541 7.541 0 0 1 10.744 0l.355.36 1.976-1.997-.348-.352Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M12.81 8.147a6.76 6.76 0 0 0-9.62 0l-.348.352 1.976 1.997.356-.36a3.969 3.969 0 0 1 5.652 0l.356.36 1.976-1.997-.348-.352Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M10.266 10.72a3.177 3.177 0 0 0-4.53 0l-.349.351L8 13.711l2.612-2.639-.346-.352Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWiFiFilled16;
