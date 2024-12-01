import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUpdate16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14 6.747H9.48l1.827-1.88C9.487 3.067 6.54 3 4.72 4.8a4.583 4.583 0 0 0 0 6.527 4.68 4.68 0 0 0 6.587 0c.906-.894 1.36-1.94 1.36-3.26H14c0 1.32-.586 3.033-1.76 4.193-2.34 2.32-6.14 2.32-8.48 0-2.333-2.313-2.353-6.073-.013-8.387a5.992 5.992 0 0 1 8.433 0L14 2v4.747ZM8.334 5.333v2.834l2.333 1.386-.48.807-2.853-1.693V5.333h1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUpdate16;
