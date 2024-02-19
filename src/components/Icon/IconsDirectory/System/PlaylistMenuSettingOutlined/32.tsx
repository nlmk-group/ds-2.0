import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistMenuSettingOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 23.941h9.41v2.706H2v-2.706Zm0-9.47h12.098v2.706H2V14.47ZM2 5h26.884v2.706H2V5Zm25.102 12.21 1.554-.529L30 19.025l-1.231 1.089c.155.74.155 1.503 0 2.243L30 23.446l-1.344 2.343-1.554-.529c-.551.5-1.207.886-1.93 1.123L24.853 28h-2.689l-.322-1.618a5.363 5.363 0 0 1-1.928-1.123l-1.554.53-1.344-2.343 1.231-1.09a5.469 5.469 0 0 1 0-2.242l-1.231-1.09 1.344-2.343 1.554.53a5.347 5.347 0 0 1 1.929-1.124l.321-1.616h2.689l.322 1.618c.72.235 1.377.622 1.928 1.123v-.002Zm-3.595 6.731a2.68 2.68 0 0 0 1.901-.792 2.715 2.715 0 0 0 0-3.827 2.68 2.68 0 0 0-3.802 0 2.715 2.715 0 0 0 0 3.827 2.68 2.68 0 0 0 1.901.792Z"
      />
    </svg>
  );
};

export default IconPlaylistMenuSettingOutlined32;
