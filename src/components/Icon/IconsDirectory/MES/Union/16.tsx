import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnion16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M6 3.333c.693 0 1.373.16 2 .454a4.716 4.716 0 0 1 2-.454 4.667 4.667 0 1 1 0 9.334c-.694 0-1.374-.16-2-.454a4.717 4.717 0 0 1-2 .454 4.667 4.667 0 0 1 0-9.334ZM5.666 8c0 1.247.527 2.373 1.374 3.167l.666-.307A3.657 3.657 0 0 1 6.333 8c0-1.16.54-2.193 1.373-2.86l-.666-.307A4.328 4.328 0 0 0 5.666 8Zm4.667 0A4.327 4.327 0 0 0 8.96 4.833l-.667.307A3.657 3.657 0 0 1 9.666 8c0 1.16-.54 2.193-1.373 2.86l.667.307A4.328 4.328 0 0 0 10.333 8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUnion16;
