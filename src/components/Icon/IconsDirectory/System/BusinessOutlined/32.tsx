import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBusinessOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.333 9.333V4H3v24h26.667V9.333H16.333Zm-8 16H5.667v-2.666h2.666v2.666Zm0-5.333H5.667v-2.667h2.666V20Zm0-5.333H5.667V12h2.666v2.667Zm0-5.334H5.667V6.667h2.666v2.666Zm5.334 16H11v-2.666h2.667v2.666Zm0-5.333H11v-2.667h2.667V20Zm0-5.333H11V12h2.667v2.667Zm0-5.334H11V6.667h2.667v2.666Zm13.333 16H16.333v-2.666H19V20h-2.667v-2.667H19v-2.666h-2.667V12H27v13.333Zm-2.667-10.666h-2.666v2.666h2.666v-2.666Zm0 5.333h-2.666v2.667h2.666V20Z"
      />
    </svg>
  );
};

export default IconBusinessOutlined32;
