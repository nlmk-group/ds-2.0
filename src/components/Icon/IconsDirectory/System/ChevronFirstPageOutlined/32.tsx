import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChevronFirstPageOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M24.547 22.12 18.427 16l6.12-6.12L22.667 8l-8 8 8 8 1.88-1.88ZM8 8h2.667v16H8V8Z"
      />
    </svg>
  );
};

export default IconChevronFirstPageOutlined32;
