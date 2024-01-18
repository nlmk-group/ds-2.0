import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconFullscreenOpenOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.88889 12.2857H3V3H12.2857V5.88889H5.88889V12.2857ZM3 19.7143H5.88889V26.1111H12.2857V29H3V19.7143ZM26.1111 26.1111H19.7143V29H29V19.7143H26.1111V26.1111ZM19.7143 5.88889V3H29V12.2857H26.1111V5.88889H19.7143Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullscreenOpenOutlined32;
