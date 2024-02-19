import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInteractionOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.607 3.12H6.869c-.926 0-1.684.809-1.684 1.797V19.29c0 .988.75 1.797 1.676 1.797h10.115c.926 0 1.684-.809 1.684-1.797V8.51l-5.053-5.39Zm1.684 8.983H8.554V13.9h6.737v-1.797Zm0 3.594H8.554v1.796h6.737v-1.796ZM6.87 19.29h10.107V9.408h-4.211V4.917H6.869V19.29Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInteractionOutlined24;
