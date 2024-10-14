import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconActivityTwo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M9.084 4h-5V2h5v2Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M18.584 10a3.5 3.5 0 1 0-2.673-1.24l-1.077 1.076L12.498 7.5a2 2 0 0 0-2.828 0L7.877 9.293l1.414 1.414 1.793-1.793 2.336 2.336-9.043 9.043 1.414 1.414 6.043-6.043L14.17 18l-2.793 2.793 1.414 1.414 2.793-2.793a2 2 0 0 0 0-2.828l-2.336-2.336 1.586-1.586L17.17 15a2 2 0 0 0 2.828 0l2.793-2.793-1.414-1.414-2.793 2.793-2.336-2.336 1.382-1.382c.303.086.623.132.954.132Zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M7.584 14h-2.5v-2h2.5v2Zm-5.5-5h3.5V7h-3.5v2Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconActivityTwo24;
