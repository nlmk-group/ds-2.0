import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProkat16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3.65 1.85h9.319v10.73l1.333.77v1.3h-12v-1.3l1.347-.776V1.85Zm1.253 11.5h6.8l-2.55-1.475V8.15h-1.7v3.725l-2.55 1.475Zm5.55-2.225V8.15h1.216v3.679l-1.217-.704Zm1.216-7.975v3.7h-6.72v-3.7h6.72Zm-6.72 8.671v-3.67h1.203v2.974l-1.203.696Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconProkat16;
