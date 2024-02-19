import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoreHorizDotsFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.333 6.667C2.6 6.667 2 7.267 2 8s.6 1.333 1.333 1.333c.734 0 1.334-.6 1.334-1.333s-.6-1.333-1.334-1.333Zm9.334 0c-.734 0-1.334.6-1.334 1.333s.6 1.333 1.334 1.333C13.4 9.333 14 8.733 14 8s-.6-1.333-1.333-1.333ZM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMoreHorizDotsFilled16;
