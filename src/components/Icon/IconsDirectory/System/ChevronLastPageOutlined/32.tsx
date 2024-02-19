import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChevronLastPageOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 9.88 14.12 16 8 22.12 9.88 24l8-8-8-8L8 9.88ZM21.88 8h2.667v16H21.88V8Z"
      />
    </svg>
  );
};

export default IconChevronLastPageOutlined32;
