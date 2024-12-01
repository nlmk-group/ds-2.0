import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRCMParallelOperation16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m4.887 1 3.111 3-3.11 3V4.75H1.002v-1.5h3.884V1ZM11.893 9l3.11 3-3.11 3v-2.25H8.008v-1.5h3.885V9ZM8 8.778c.413 0 .75.35.75.778 0 .427-.337.777-.75.777-.412 0-.75-.35-.75-.777 0-.428.338-.778.75-.778ZM8 5.667c.413 0 .75.35.75.777 0 .428-.337.778-.75.778-.412 0-.75-.35-.75-.778 0-.427.338-.777.75-.777Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRCMParallelOperation16;
