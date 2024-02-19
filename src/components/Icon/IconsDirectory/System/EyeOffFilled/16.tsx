import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOffFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3.013 3.956.93 1.872l.943-.943 13.2 13.2-.944.942-2.207-2.206A7.336 7.336 0 0 1 .787 8a7.32 7.32 0 0 1 2.226-4.044Zm6.825 6.825-.976-.976a2 2 0 0 1-2.667-2.667l-.976-.976a3.333 3.333 0 0 0 4.619 4.62ZM8 2c-.947 0-1.853.18-2.684.507L7.511 4.7a3.333 3.333 0 0 1 3.787 3.787l2.573 2.573A7.299 7.299 0 0 0 15.213 8 7.336 7.336 0 0 0 8 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconEyeOffFilled16;
