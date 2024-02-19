import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconQuestionMarkOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.562 12.85c.776-1.39 2.266-2.21 3.132-3.44.917-1.29.403-3.7-2.195-3.7-1.702 0-2.538 1.28-2.89 2.34L6 6.96C6.715 4.83 8.659 3 11.489 3c2.366 0 3.988 1.07 4.814 2.41.705 1.15 1.117 3.3.03 4.9-1.209 1.77-2.367 2.31-2.991 3.45-.252.46-.353.76-.353 2.24h-2.91c-.01-.78-.131-2.05.483-3.15ZM13.513 20c0 1.1-.906 2-2.014 2-1.108 0-2.014-.9-2.014-2s.906-2 2.014-2c1.108 0 2.014.9 2.014 2Z"
      />
    </svg>
  );
};

export default IconQuestionMarkOutlined24;
