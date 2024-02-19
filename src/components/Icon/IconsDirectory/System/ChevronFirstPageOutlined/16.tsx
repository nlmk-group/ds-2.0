import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChevronFirstPageOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.273 11.06 9.213 8l3.06-3.06-.94-.94-4 4 4 4 .94-.94ZM4 4h1.333v8H4V4Z"
      />
    </svg>
  );
};

export default IconChevronFirstPageOutlined16;
