import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconReplayOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M6.3 6.5L11.8 12V7.6C15.441 7.6 18.4 10.559 18.4 14.2C18.4 17.841 15.441 20.8 11.8 20.8C8.159 20.8 5.2 17.841 5.2 14.2H3C3 19.062 6.938 23 11.8 23C16.662 23 20.6 19.062 20.6 14.2C20.6 9.338 16.662 5.4 11.8 5.4V1L6.3 6.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReplayOutlined24;
