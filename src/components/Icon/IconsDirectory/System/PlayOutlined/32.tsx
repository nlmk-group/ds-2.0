import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlayOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m13.2 22.3 8.4-6.3-8.4-6.3v12.6ZM16 2C8.272 2 2 8.272 2 16s6.272 14 14 14 14-6.272 14-14S23.728 2 16 2Zm0 25.2C9.826 27.2 4.8 22.174 4.8 16 4.8 9.826 9.826 4.8 16 4.8c6.174 0 11.2 5.026 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2Z"
      />
    </svg>
  );
};

export default IconPlayOutlined32;
