import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWiFiFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M23.359 8.335c-6.267-6.447-16.441-6.446-22.717 0l-.34.348L3 11.458l.359-.369c4.773-4.91 12.509-4.91 17.283 0l.358.37 2.697-2.776-.338-.348Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M19.359 12.45c-4.057-4.173-10.651-4.173-14.717 0l-.34.348L7 15.573l.359-.368a6.435 6.435 0 0 1 9.283 0l.358.368 2.697-2.774-.338-.349Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M15.36 16.566a4.654 4.654 0 0 0-6.718 0l-.34.348L12 20.717l3.696-3.802-.336-.349Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWiFiFilled24;
