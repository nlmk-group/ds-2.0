import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLocationPinaltOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 7.494a1.25 1.25 0 0 0 1.226-1.495 1.251 1.251 0 0 0-2.265-.451A1.252 1.252 0 0 0 8 7.494Zm-.444 4.322a.624.624 0 0 0 .888 0L11 9.252A4.248 4.248 0 0 0 8 2a4.241 4.241 0 0 0-3.92 2.623A4.251 4.251 0 0 0 5 9.252l2.556 2.564ZM5.02 5.955a3.01 3.01 0 0 1 1.331-2.22 3.004 3.004 0 0 1 3.3 0 3.013 3.013 0 0 1 1.17 3.517c-.148.42-.388.802-.701 1.118L8 10.49 5.881 8.37a2.984 2.984 0 0 1-.862-2.415Zm7.356 7.294h-8.75a.625.625 0 0 0 0 1.251h8.75a.625.625 0 0 0 0-1.251Z"
      />
    </svg>
  );
};

export default IconLocationPinaltOutlined16;
