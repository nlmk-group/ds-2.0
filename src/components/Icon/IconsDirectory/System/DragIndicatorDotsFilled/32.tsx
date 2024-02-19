import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDragIndicatorDotsFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.6 1.5c-2.243 0-4.1 1.786-4.1 4s1.857 4 4.1 4c2.243 0 4.1-1.786 4.1-4s-1.857-4-4.1-4Zm10.8 0c-2.243 0-4.1 1.786-4.1 4s1.857 4 4.1 4c2.243 0 4.1-1.786 4.1-4s-1.857-4-4.1-4ZM10.6 12c-2.243 0-4.1 1.786-4.1 4s1.857 4 4.1 4c2.243 0 4.1-1.786 4.1-4s-1.857-4-4.1-4Zm10.8 0c-2.243 0-4.1 1.786-4.1 4s1.857 4 4.1 4c2.243 0 4.1-1.786 4.1-4s-1.857-4-4.1-4ZM10.6 22.5c-2.243 0-4.1 1.786-4.1 4s1.857 4 4.1 4c2.243 0 4.1-1.786 4.1-4s-1.857-4-4.1-4Zm10.8 0c-2.243 0-4.1 1.786-4.1 4s1.857 4 4.1 4c2.243 0 4.1-1.786 4.1-4s-1.857-4-4.1-4Z"
      />
    </svg>
  );
};

export default IconDragIndicatorDotsFilled32;
