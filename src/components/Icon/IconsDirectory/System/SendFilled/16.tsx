import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSendFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 8.657h4.316V7.343H1V1.328c0-.057.016-.113.047-.162a.345.345 0 0 1 .13-.12.386.386 0 0 1 .356-.005l13.28 6.671c.057.029.104.07.137.12a.308.308 0 0 1 0 .335.348.348 0 0 1-.136.12L1.533 14.96a.388.388 0 0 1-.356-.005.345.345 0 0 1-.13-.12.307.307 0 0 1-.047-.162V8.657Z"
      />
    </svg>
  );
};

export default IconSendFilled16;
