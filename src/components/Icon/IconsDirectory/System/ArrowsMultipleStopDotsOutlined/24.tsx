import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsMultipleStopDotsOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M18.111 3 23 7.5 18.111 12V8.625h-4.889v-2.25h4.89V3ZM9.556 6.375c-.673 0-1.223.506-1.223 1.125s.55 1.125 1.223 1.125c.672 0 1.222-.506 1.222-1.125s-.55-1.125-1.222-1.125Zm-4.89 0c-.672 0-1.222.506-1.222 1.125s.55 1.125 1.223 1.125c.672 0 1.222-.506 1.222-1.125s-.55-1.125-1.222-1.125Zm1.223 11.25h4.889v-2.25h-4.89V12L1 16.5 5.889 21v-3.375Zm8.555 0c.673 0 1.223-.506 1.223-1.125s-.55-1.125-1.223-1.125c-.672 0-1.222.506-1.222 1.125s.55 1.125 1.222 1.125Zm4.89 0c.672 0 1.222-.506 1.222-1.125s-.55-1.125-1.223-1.125c-.672 0-1.222.506-1.222 1.125s.55 1.125 1.222 1.125Z"
      />
    </svg>
  );
};

export default IconArrowsMultipleStopDotsOutlined24;
