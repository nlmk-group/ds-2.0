import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWebsoft24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M11 7.955V1h2v6.955l2.886-2.244 1.228 1.578-4.5 3.5-.614.478-.614-.478-4.5-3.5 1.228-1.578L11 7.955ZM3 14a3 3 0 1 1 4.984 2.25A4.502 4.502 0 0 1 11 20.5V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1.5a4.502 4.502 0 0 1 3.016-4.25A2.993 2.993 0 0 1 3 14Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12-2a3 3 0 0 0-1.984 5.25A4.502 4.502 0 0 0 13 20.5V22a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.5a4.502 4.502 0 0 0-3.016-4.25A3 3 0 0 0 18 11Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM5.5 18A2.5 2.5 0 0 0 3 20.5v.5h6v-.5A2.5 2.5 0 0 0 6.5 18h-1Zm9.5 2.5a2.5 2.5 0 0 1 2.5-2.5h1a2.5 2.5 0 0 1 2.5 2.5v.5h-6v-.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWebsoft24;
