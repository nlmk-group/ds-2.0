import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowRightOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m16.172 10.972-5.364-5.518L12.222 4 20 12l-7.778 8-1.414-1.454 5.364-5.518H4v-2.056h12.172Z"
      />
    </svg>
  );
};

export default IconArrowRightOutlined24;
