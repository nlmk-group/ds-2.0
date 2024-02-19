import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArmaturaFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M29.901 14.151c1.61-1.61.481-5.35-2.523-8.354-3.003-3.004-6.744-4.133-8.354-2.523-1.61 1.61-.48 5.35 2.523 8.354 3.003 3.004 6.744 4.133 8.354 2.523ZM12.185 10.09l4.42-4.413a7.748 7.748 0 0 0 .363 1.873v19.528l-2.709 2.705c-.55.551-1.282.777-2.074.776V10.091Zm6.483 15.29V10.855c.487.683 1.05 1.348 1.677 1.976 1.66 1.66 3.58 2.864 5.41 3.416a7.755 7.755 0 0 0 1.736.323l-8.823 8.81ZM3.37 18.893l7.115-7.105v18.477a7.074 7.074 0 0 1-.17-.057c-1.493-.525-3.074-1.595-4.425-2.945-1.35-1.351-2.42-2.933-2.945-4.425-.507-1.44-.547-2.973.425-3.945Z"
      />
    </svg>
  );
};

export default IconArmaturaFilled32;
