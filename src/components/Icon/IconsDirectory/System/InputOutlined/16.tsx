import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInputOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2.182 3h10.636C13.468 3 14 3.544 14 4.224v8.565c0 .673-.532 1.211-1.182 1.211H2.182C1.532 14 1 13.462 1 12.789v-2.454h1.182v2.46h10.636V4.21H2.182v2.454H1v-2.44C1 3.55 1.532 3 2.182 3Z"
      />
      <path fill={htmlColor || 'currentColor'} d="m9.273 8.5-2.364 2.447V9.112H1V7.888h5.91V6.053L9.272 8.5Z" />
    </svg>
  );
};

export default IconInputOutlined16;
