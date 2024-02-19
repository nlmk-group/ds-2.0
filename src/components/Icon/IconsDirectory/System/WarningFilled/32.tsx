import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWarningFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 28.91h30L16 3 1 28.91Zm16.364-4.092h-2.728v-2.727h2.728v2.727Zm0-5.454h-2.728v-5.455h2.728v5.455Z"
      />
    </svg>
  );
};

export default IconWarningFilled32;
