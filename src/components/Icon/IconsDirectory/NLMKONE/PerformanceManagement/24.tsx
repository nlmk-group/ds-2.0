import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPerformanceManagement24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 3a1 1 0 0 1 .848.47l10 16A1.001 1.001 0 0 1 22 21H2a1.001 1.001 0 0 1-.848-1.53l10-16 .075-.104A1 1 0 0 1 12 3ZM5.463 19h4.134l-.946-1.418L5.463 19Zm5.042-2.242L12 19l1.494-2.242L12 16.094l-1.495.664ZM14.403 19h4.134l-3.19-1.418L14.404 19ZM5.06 16.99l2.466-1.096-.919-1.38L5.06 16.99Zm11.414-1.097 2.466 1.096-1.547-2.474-.92 1.378Zm-7.094-.824 1.62-.72V13H8l1.38 2.07Zm3.62-.72 1.621.72L16 13h-3v1.35ZM13 11h2.197L13 7.485V11Zm-4.195 0H11V7.485L8.804 11Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPerformanceManagement24;
