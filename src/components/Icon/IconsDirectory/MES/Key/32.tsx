import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKey32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M10.579 22.333c3.176 0 5.835-2.237 6.445-5.2h2.765v2.6h2.632v-2.6h2.632v3.9h2.631v-3.9H29v-2.6H17.024c-.61-2.962-3.269-5.2-6.445-5.2C6.95 9.333 4 12.25 4 15.833s2.951 6.5 6.579 6.5Zm0-10.4c2.176 0 3.947 1.75 3.947 3.9s-1.77 3.9-3.947 3.9c-2.176 0-3.947-1.75-3.947-3.9s1.77-3.9 3.947-3.9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKey32;
