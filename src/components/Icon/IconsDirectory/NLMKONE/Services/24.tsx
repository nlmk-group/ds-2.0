import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconServices24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13.03 4.183c-.61-.25-1.3-.25-1.91 0l-6.83 2.73-.03.01-.74.29c-.7.28-.7 1.26 0 1.54l.74.29h.03v.01l6.83 2.74c.61.25 1.3.24 1.91 0l6.68-2.73h.01l.75-.31a.824.824 0 0 0 0-1.53l-.75-.31h-.01l-6.68-2.73Zm.76-1.85 7.45 3.04c2.35.96 2.35 4.28 0 5.24l-7.45 3.04c-1.09.45-2.32.45-3.41.01l-7.6-3.04c-2.37-.96-2.37-4.3 0-5.26l7.6-3.04a4.57 4.57 0 0 1 3.41.01Zm9.15 11.18c.19.52-.07 1.09-.59 1.29l-8.78 3.28c-.94.35-2 .35-2.94 0l-8.97-3.28a.998.998 0 0 1-.6-1.28c.19-.52.76-.79 1.28-.6l8.96 3.28c.5.18 1.06.18 1.56 0l8.78-3.28c.52-.19 1.09.07 1.29.59h.01Zm-.59 5.58a1.003 1.003 0 0 0-.7-1.88l-8.78 3.28c-.5.19-1.06.19-1.56 0l-8.97-3.27a.998.998 0 0 0-1.28.6c-.19.52.08 1.09.6 1.28l8.96 3.28c.95.35 2 .34 2.94 0l8.78-3.28.01-.01Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconServices24;
