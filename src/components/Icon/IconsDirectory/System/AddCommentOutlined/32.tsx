import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddCommentOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.95 18.8h2.1v-4.55h4.55v-2.1h-4.55V7.6h-2.1v4.55H10.4v2.1h4.55v4.55ZM2 30V4.1c0-.537.21-1.02.63-1.452C3.05 2.216 3.54 2 4.1 2h23.8c.537 0 1.02.216 1.453.647.431.432.647.916.647 1.453v18.2c0 .537-.216 1.02-.648 1.453-.431.431-.915.647-1.452.647H7.6L2 30Zm2.1-5.075L6.725 22.3H27.9V4.1H4.1v20.825ZM4.1 4.1v20.825V4.1Z"
      />
    </svg>
  );
};

export default IconAddCommentOutlined32;
