import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReplayOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m6.3 6.5 5.5 5.5V7.6c3.641 0 6.6 2.959 6.6 6.6 0 3.641-2.959 6.6-6.6 6.6a6.605 6.605 0 0 1-6.6-6.6H3c0 4.862 3.938 8.8 8.8 8.8s8.8-3.938 8.8-8.8-3.938-8.8-8.8-8.8V1L6.3 6.5Z"
      />
    </svg>
  );
};

export default IconReplayOutlined24;
