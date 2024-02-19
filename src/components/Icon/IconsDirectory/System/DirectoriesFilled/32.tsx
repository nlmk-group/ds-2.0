import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectoriesFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M25.031 26H7.282C5.098 26 4 24.89 4 22.66v-8.97h24v8.97c0 2.22-1.087 3.34-2.969 3.34ZM28 12.056H4V9.254C4 7.078 5.056 6 6.885 6H10c1.024 0 1.568.205 2.258.797l.638.55c.522.453.94.636 1.651.636h10.17c2.185 0 3.283 1.11 3.283 3.33v.743Z"
      />
    </svg>
  );
};

export default IconDirectoriesFilled32;
