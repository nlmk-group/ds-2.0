import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ChevronDownCircle16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.848 6.554 8 8.402 6.152 6.554 5.3 7.4 8 10.1l2.7-2.7-.852-.846ZM8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6Zm0 10.8A4.799 4.799 0 0 1 3.2 8c0-2.652 2.148-4.8 4.8-4.8 2.652 0 4.8 2.148 4.8 4.8 0 2.652-2.148 4.8-4.8 4.8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default ChevronDownCircle16;
