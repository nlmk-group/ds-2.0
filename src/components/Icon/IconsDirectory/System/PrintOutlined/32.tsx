import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPrintOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.066 25.616h-4.05a1.35 1.35 0 0 1-1.35-1.35v-13.5a1.35 1.35 0 0 1 1.35-1.35h4.05v-5.4a1.35 1.35 0 0 1 1.35-1.35h13.5a1.35 1.35 0 0 1 1.35 1.35v5.4h4.05a1.35 1.35 0 0 1 1.35 1.35v13.5a1.35 1.35 0 0 1-1.35 1.35h-4.05v2.7a1.35 1.35 0 0 1-1.35 1.35h-13.5a1.35 1.35 0 0 1-1.35-1.35v-2.7Zm0-2.7v-1.35a1.35 1.35 0 0 1 1.35-1.35h13.5a1.35 1.35 0 0 1 1.35 1.35v1.35h2.7v-10.8h-21.6v10.8h2.7Zm2.7-17.55v4.05h10.8v-4.05h-10.8Zm0 17.55v4.05h10.8v-4.05h-10.8Zm-4.05-9.45h4.05v2.7h-4.05v-2.7Z"
      />
    </svg>
  );
};

export default IconPrintOutlined32;
