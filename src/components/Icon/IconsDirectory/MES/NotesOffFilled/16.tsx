import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotesOffFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m0 2 .847-.847 13.82 13.82-.847.847L10 12H4l-2.667 2.667L1.34 3.34 0 2Zm4 7.333h1.333V8H4v1.333Zm0-2V6l1.333 1.333H4Zm-1.28-6h10.613c.734 0 1.334.6 1.334 1.334v8c0 .72-.574 1.3-1.287 1.326l-4.66-4.66H12V6H7.387l-.667-.667H12V4H6.667v1.28L2.72 1.333Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconNotesOffFilled16;
