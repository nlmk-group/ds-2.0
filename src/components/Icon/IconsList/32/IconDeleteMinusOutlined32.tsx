import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconDeleteMinusOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M27 17H17.5714H14.4286H5V15H14.4286H13.6429H16.7857H17.5714H27V17Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconDeleteMinusOutlined32;
