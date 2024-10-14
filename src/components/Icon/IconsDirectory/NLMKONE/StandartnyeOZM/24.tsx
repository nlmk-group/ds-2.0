import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStandartnyeOZM24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-.5v2h.5a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.5v-2H5a1 1 0 0 1-1-1V6ZM1 20h4.884a4.29 4.29 0 0 0 1.881 2H1v-2Zm17.116 0a4.29 4.29 0 0 1-1.881 2H23v-2h-4.884ZM9.773 9A.773.773 0 0 0 9 9.773v8.454c0 .427.346.773.773.773h4.454a.773.773 0 0 0 .773-.773V9.773A.773.773 0 0 0 14.227 9H9.773ZM7 9.773A2.773 2.773 0 0 1 9.773 7h4.454A2.773 2.773 0 0 1 17 9.773v8.454A2.773 2.773 0 0 1 14.227 21H9.773A2.773 2.773 0 0 1 7 18.227V9.773ZM10 11h4v2h-4v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStandartnyeOZM24;
