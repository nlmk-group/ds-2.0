import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLogoBrandJiraOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M22.081 1H11.487a4.783 4.783 0 0 0 4.783 4.782h1.951v1.885a4.782 4.782 0 0 0 4.78 4.779V1.919A.919.919 0 0 0 22.08 1ZM16.84 6.279H6.245a4.782 4.782 0 0 0 4.78 4.779h1.95v1.89a4.782 4.782 0 0 0 4.783 4.776V7.198a.92.92 0 0 0-.92-.92ZM1 11.554h10.594a.92.92 0 0 1 .92.92V23a4.782 4.782 0 0 1-4.774-4.78v-1.883H5.782A4.782 4.782 0 0 1 1 11.554Z"
        fill={htmlColor || 'currentColor'}
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLogoBrandJiraOutlined24;
