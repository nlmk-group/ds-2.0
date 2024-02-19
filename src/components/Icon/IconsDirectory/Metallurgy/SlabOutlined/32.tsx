import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.331 4.137a1.132 1.132 0 0 1 1.081 0l8.038 4.404c.34.187.55.533.55.909v9.798c0 .376-.211.723-.552.91l-14.163 7.706a1.132 1.132 0 0 1-1.1-.013L4.53 23.447a1.038 1.038 0 0 1-.53-.896v-9.982c0-.376.21-.723.551-.909l13.78-7.523ZM6.182 19.713v2.245l6.58 3.785 13.056-7.104v-2.28l-12.533 6.82a1.131 1.131 0 0 1-1.1-.013l-6.003-3.453Zm19.636-5.759-13.056 7.105-6.58-3.785v-4.097L18.87 6.25l6.335 3.47-12.412 6.619-4.429-2.822v2.51l3.784 2.408c.34.213.774.229 1.129.04l12.541-6.688v2.167Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlabOutlined32;
