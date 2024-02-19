import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEducationFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="m3 9.5 9-5 9 5v6.667h-1.636v-5.759L12 14.502 3 9.5Z" />
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.273 13.148v3.169L12 19.5l5.727-3.183v-3.17l-5.726 3.185-5.728-3.184Z"
      />
    </svg>
  );
};

export default IconEducationFilled24;
