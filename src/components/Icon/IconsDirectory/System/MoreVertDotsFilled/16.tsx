import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoreVertDotsFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2c-.733 0-1.333.6-1.333 1.333 0 .734.6 1.334 1.333 1.334s1.333-.6 1.333-1.334C9.333 2.6 8.733 2 8 2Zm0 9.333c-.733 0-1.333.6-1.333 1.334C6.667 13.4 7.267 14 8 14s1.333-.6 1.333-1.333c0-.734-.6-1.334-1.333-1.334ZM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMoreVertDotsFilled16;
