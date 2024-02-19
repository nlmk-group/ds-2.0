import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWorker32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.85 3.193V2h-1.7v1.197a7.818 7.818 0 0 0-2.3.617V3h-1.7v1.837a7.855 7.855 0 0 0-3 6.182v1.13H7.04v1.7h1.61V16c0 1.95.76 3.724 2.001 5.04v3.4l-8.63 3.71H2v1.7h28v-1.7h-.039l-8.611-3.71v-3.4c1.24-1.316 2-3.09 2-5.04v-2.15H25v-1.7h-1.11v-1.13a7.856 7.856 0 0 0-3.04-6.213V3h-1.7v.797a7.819 7.819 0 0 0-2.3-.604Zm8.814 24.957-6.014-2.59v-3.18a7.316 7.316 0 0 1-3.65.969 7.317 7.317 0 0 1-3.65-.969v3.179l-6.025 2.59h19.339ZM10.35 16v-2.15h11.3V16a5.65 5.65 0 0 1-11.3 0Zm8.8-10.298a6.13 6.13 0 0 0-2.3-.797V9h-1.7V4.91a6.13 6.13 0 0 0-2.3.815V8h-1.7v-.77a6.142 6.142 0 0 0-1.3 3.79v1.13h12.34v-1.13a6.142 6.142 0 0 0-1.34-3.839V8h-1.7V5.702Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWorker32;
