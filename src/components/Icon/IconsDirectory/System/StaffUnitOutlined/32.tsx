import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStaffUnitOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.297 21.266a8.484 8.484 0 0 1 1.902-3.471A17.23 17.23 0 0 0 16 17.75c-4.672 0-14 2.345-14 7V30h16.023a8.517 8.517 0 0 1-2.478-3.5H5.5v-1.733c.333-1.197 5.252-3.297 9.797-3.5Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9 9c0-3.867 3.133-7 7-7s7 3.133 7 7-3.133 7-7 7-7-3.133-7-7Zm10.5 0A3.51 3.51 0 0 0 16 5.5 3.51 3.51 0 0 0 12.5 9a3.51 3.51 0 0 0 3.5 3.5A3.51 3.51 0 0 0 19.5 9Zm5.399 8.137a7.186 7.186 0 0 0-2.799.001 2.599 2.599 0 0 1-1.336 1.86c-.72.395-1.59.457-2.364.17A6.456 6.456 0 0 0 17 21.47a2.549 2.549 0 0 1 1.027 2.03 2.548 2.548 0 0 1-1.026 2.029 6.42 6.42 0 0 0 1.398 2.304 2.86 2.86 0 0 1 2.365.169 2.598 2.598 0 0 1 1.337 1.862 7.188 7.188 0 0 0 2.799-.003 2.597 2.597 0 0 1 1.336-1.858 2.859 2.859 0 0 1 2.364-.17A6.456 6.456 0 0 0 30 25.53a2.548 2.548 0 0 1-1.027-2.03 2.548 2.548 0 0 1 1.026-2.03 6.42 6.42 0 0 0-1.398-2.305 2.859 2.859 0 0 1-2.365-.17 2.598 2.598 0 0 1-1.337-1.86Zm.653 6.363c0 1.077-.919 1.95-2.052 1.95s-2.052-.873-2.052-1.95c0-1.076.919-1.95 2.052-1.95s2.052.874 2.052 1.95Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStaffUnitOutlined32;
