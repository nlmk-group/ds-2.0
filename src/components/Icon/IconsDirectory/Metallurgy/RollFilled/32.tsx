import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRollFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.324 16a5.676 5.676 0 1 1 11.352 0 5.676 5.676 0 0 1-11.352 0Zm8.595 0a2.919 2.919 0 1 1-5.838 0 2.919 2.919 0 0 1 5.838 0Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4Zm0 5.027a6.973 6.973 0 1 0 0 13.946 6.973 6.973 0 0 0 0-13.946Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRollFilled32;
