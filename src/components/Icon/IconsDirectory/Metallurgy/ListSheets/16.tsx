import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListSheets16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M7.232 10.042a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6.312 2.623 2.546 6.385a5 5 0 1 0 6.99 7.15l4.024-4.017-.003-.003a5 5 0 0 0-7.245-6.892Zm7.066 4.796a3.7 3.7 0 0 1-.782 1.22l.002.002-3.981 3.975a3.702 3.702 0 0 1-5.693-.56 3.7 3.7 0 0 1 5.692-4.672l.46.46 3.89-3.891a3.703 3.703 0 0 1 .412 3.466Zm-1.332-4.385a3.698 3.698 0 0 0-4.797.49l-.006.006a1.762 1.762 0 0 0-.006.006l-1.47 1.47a5 5 0 0 1 3.279 1.029l3-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconListSheets16;
