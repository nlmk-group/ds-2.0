import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUploadFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7 28a2.888 2.888 0 0 1-2.118-.88A2.89 2.89 0 0 1 4 25v-4.5h3V25h18v-4.5h3V25c0 .825-.294 1.532-.88 2.12A2.893 2.893 0 0 1 25 28H7Zm7.5-6V11.5h-6L16 4l7.5 7.5h-6V22h-3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUploadFilled32;
