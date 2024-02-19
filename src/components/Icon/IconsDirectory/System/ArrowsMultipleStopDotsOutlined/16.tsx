import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsMultipleStopDotsOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.889 2 15 5l-3.111 3V5.75H8.778v-1.5h3.11V2ZM6.444 4.25c-.427 0-.777.338-.777.75s.35.75.777.75c.428 0 .778-.338.778-.75s-.35-.75-.778-.75Zm-3.11 0c-.428 0-.778.338-.778.75s.35.75.777.75c.428 0 .778-.338.778-.75s-.35-.75-.778-.75Zm.777 7.5h3.111v-1.5h-3.11V8L1 11l3.111 3v-2.25Zm5.445 0c.427 0 .777-.338.777-.75s-.35-.75-.777-.75c-.428 0-.778.338-.778.75s-.35.75.778.75Zm3.11 0c.428 0 .778-.338.778-.75s-.35-.75-.777-.75c-.428 0-.778.338-.778.75s-.35.75.778.75Z"
      />
    </svg>
  );
};

export default IconArrowsMultipleStopDotsOutlined16;
