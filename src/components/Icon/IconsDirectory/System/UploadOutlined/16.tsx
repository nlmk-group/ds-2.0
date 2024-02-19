import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUploadOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.5 15c-.413 0-.765-.147-1.059-.44A1.445 1.445 0 0 1 2 13.5v-2.25h1.5v2.25h9v-2.25H14v2.25c0 .412-.147.766-.44 1.06a1.45 1.45 0 0 1-1.06.44h-9Zm3.75-3V6.75h-3L8 3l3.75 3.75h-3V12h-1.5Z"
      />
    </svg>
  );
};

export default IconUploadOutlined16;
