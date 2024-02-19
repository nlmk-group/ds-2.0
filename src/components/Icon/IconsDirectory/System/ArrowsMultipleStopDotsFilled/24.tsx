import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsMultipleStopDotsFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H1Zm22 5.5L18.111 3v3.375h-4.889v2.25h4.89V12L23 7.5Zm-14.667 0c0-.619.55-1.125 1.223-1.125.672 0 1.222.506 1.222 1.125s-.55 1.125-1.222 1.125c-.673 0-1.223-.506-1.223-1.125Zm-4.889 0c0-.619.55-1.125 1.223-1.125.672 0 1.222.506 1.222 1.125s-.55 1.125-1.222 1.125c-.673 0-1.223-.506-1.223-1.125ZM5.89 12v3.375h4.889v2.25h-4.89V21L1 16.5 5.889 12Zm9.778 4.5c0 .619-.55 1.125-1.223 1.125-.672 0-1.222-.506-1.222-1.125s.55-1.125 1.222-1.125c.673 0 1.223.506 1.223 1.125Zm4.889 0c0 .619-.55 1.125-1.223 1.125-.672 0-1.222-.506-1.222-1.125s.55-1.125 1.222-1.125c.673 0 1.223.506 1.223 1.125Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsMultipleStopDotsFilled24;
