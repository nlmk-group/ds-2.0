import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUndoArrowFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.85 10.333c-3.496 0-6.661 1.32-9.102 3.467L3 9v12h11.871l-4.775-4.827c1.834-1.546 4.168-2.506 6.753-2.506 4.67 0 8.64 3.08 10.025 7.333L30 19.96c-1.833-5.587-7.017-9.627-13.15-9.627Z"
      />
    </svg>
  );
};

export default IconUndoArrowFilled32;
