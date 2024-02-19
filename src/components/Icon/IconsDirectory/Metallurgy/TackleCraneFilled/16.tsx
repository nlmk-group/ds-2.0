import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTackleCraneFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.85 5.15V1.5h1.3v2.425a2.839 2.839 0 0 1 1.18 4.936l1.12 2.99h4.05v3.3h-14v-3.3h4.05l1.12-2.99a2.839 2.839 0 0 1-1.01-2.172h1.3A1.54 1.54 0 1 0 8.5 5.15h-.65Zm1.204 4.324.108-.023.9 2.4H6.938l.9-2.4a2.84 2.84 0 0 0 1.216.023Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTackleCraneFilled16;
