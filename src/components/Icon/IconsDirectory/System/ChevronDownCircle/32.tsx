import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ChevronDownCircle32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M19.696 13.108 16 16.804l-3.696-3.696L10.6 14.8l5.4 5.4 5.4-5.4-1.704-1.692ZM16 4C9.376 4 4 9.376 4 16s5.376 12 12 12 12-5.376 12-12S22.624 4 16 4Zm0 21.6A9.597 9.597 0 0 1 6.4 16c0-5.304 4.296-9.6 9.6-9.6 5.304 0 9.6 4.296 9.6 9.6 0 5.304-4.296 9.6-9.6 9.6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default ChevronDownCircle32;
