import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStaffUnitFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9 9c0-3.867 3.133-7 7-7s7 3.133 7 7-3.133 7-7 7-7-3.133-7-7ZM2 24.75c0-4.655 9.328-7 14-7 .804 0 1.747.07 2.756.208A7.982 7.982 0 0 0 16 24a7.98 7.98 0 0 0 2.708 6H2v-5.25Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22.708 18.128a6.633 6.633 0 0 1 2.583-.002 2.4 2.4 0 0 0 1.235 1.717 2.64 2.64 0 0 0 2.183.157 5.916 5.916 0 0 1 1.29 2.126A2.352 2.352 0 0 0 29.052 24c0 .759.37 1.435.948 1.874A5.96 5.96 0 0 1 28.708 28a2.64 2.64 0 0 0-2.182.156 2.398 2.398 0 0 0-1.234 1.716c-.852.17-1.731.17-2.583.002a2.398 2.398 0 0 0-1.235-1.718A2.64 2.64 0 0 0 19.291 28a5.927 5.927 0 0 1-1.29-2.128c.6-.454.948-1.144.947-1.872A2.348 2.348 0 0 0 18 22.126 5.96 5.96 0 0 1 19.292 20a2.64 2.64 0 0 0 2.182-.156 2.399 2.399 0 0 0 1.234-1.716ZM24 25.8c1.046 0 1.894-.806 1.894-1.8s-.848-1.8-1.894-1.8c-1.046 0-1.894.806-1.894 1.8s.848 1.8 1.894 1.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStaffUnitFilled32;
