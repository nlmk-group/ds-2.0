import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotEqualSign32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 25.49 24.49 5l1.982 1.982-4.298 4.297H28v2.803h-8.628l-5.045 5.044H28v2.803H11.525l-5.543 5.543L4 25.49Zm5.524-6.364H5.58v2.803h1.141l2.803-2.803ZM5.58 11.28h11.79l-2.802 2.803H5.58V11.28Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNotEqualSign32;
