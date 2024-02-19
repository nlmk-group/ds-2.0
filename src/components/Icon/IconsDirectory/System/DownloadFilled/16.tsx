import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDownloadFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.667 8v4.667H3.333V8H2v4.667C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V8h-1.333Zm-4-.333h2.666L8 11 4.667 7.667h2.666V2h1.334v5.667Z"
      />
    </svg>
  );
};

export default IconDownloadFilled16;
