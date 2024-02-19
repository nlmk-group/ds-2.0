import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.748 3.103a.849.849 0 0 1 .811 0l6.029 3.303c.255.14.412.4.412.681v7.349a.78.78 0 0 1-.414.682l-10.622 5.78a.849.849 0 0 1-.825-.01l-5.742-3.303A.778.778 0 0 1 3 16.913V9.427a.78.78 0 0 1 .414-.682l10.334-5.642ZM4.637 14.785v1.684l4.934 2.838 9.793-5.328v-1.71l-9.4 5.115a.849.849 0 0 1-.825-.01l-4.502-2.59Zm14.727-4.32L9.57 15.794l-4.934-2.839V9.883l9.515-5.196 4.752 2.603-9.31 4.964-3.321-2.116v1.883l2.838 1.805c.254.16.58.172.847.03l9.406-5.016v1.626Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlabOutlined24;
