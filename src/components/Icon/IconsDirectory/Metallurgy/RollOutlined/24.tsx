import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRollOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 4.946a7.054 7.054 0 1 0 0 14.108 7.054 7.054 0 0 0 0-14.108ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 7.743a4.257 4.257 0 1 0 0 8.514 4.257 4.257 0 0 0 0-8.514ZM6.77 12a5.23 5.23 0 1 1 10.46 0 5.23 5.23 0 0 1-10.46 0Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M12 14.19a2.19 2.19 0 1 0 0-4.38 2.19 2.19 0 0 0 0 4.38Z" />
    </svg>
  );
};

export default IconRollOutlined24;
