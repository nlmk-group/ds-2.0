import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsMultipleStopDotsFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1Zm14 4-3.111-3v2.25H8.778v1.5h3.11V8L15 5ZM5.667 5c0-.412.35-.75.777-.75.428 0 .778.338.778.75s-.35.75-.778.75c-.427 0-.777-.338-.777-.75ZM2.556 5c0-.412.35-.75.777-.75.428 0 .778.338.778.75s-.35.75-.778.75c-.427 0-.777-.338-.777-.75ZM4.11 8v2.25h3.111v1.5h-3.11V14L1 11l3.111-3Zm6.222 3c0 .412-.35.75-.777.75-.428 0-.778-.338-.778-.75s.35-.75.778-.75c.427 0 .777.338.777.75Zm3.111 0c0 .412-.35.75-.777.75-.428 0-.778-.338-.778-.75s.35-.75.778-.75c.427 0 .777.338.777.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsMultipleStopDotsFilled16;
