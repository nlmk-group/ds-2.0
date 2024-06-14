import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormula32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m16 2 14 18.667L25.8 30H6.2L2 20.667 16 2Zm3.325 20.222h-6.65l2.1 4.667h2.45l2.1-4.667ZM17.4 8.728V19.11h7.77L17.4 8.728Zm-2.8 0L6.83 19.11h7.77V8.728ZM9.56 22.222H5.85l2.1 4.667h3.71l-2.1-4.667Zm16.59 0h-3.71l-2.1 4.667h3.71l2.1-4.667Z"
      />
    </svg>
  );
};

export default IconFormula32;
