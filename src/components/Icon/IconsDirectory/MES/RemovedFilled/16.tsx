import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRemovedFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14 13H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1Zm-2.755-6.208c-.33.123-.356.756-.472 1.216A3.584 3.584 0 0 0 7.586 6C5.717 6 4.18 7.482 4.002 9.378c-.015.163-.017.622.486.622.488 0 .46-.457.482-.629C5.147 8.031 6.25 7 7.586 7a2.619 2.619 0 0 1 2.297 1.4c-.506-.159-1.117-.425-1.38-.076-.29.389-.149.643.281.838.686.311 1.09.45 1.786.698.522.187.928-.054 1.03-.579.146-.745.26-1.088.39-1.866.081-.496-.303-.788-.745-.623ZM14.5 2h-13a.5.5 0 1 1 0-1h13a.5.5 0 0 1 0 1Zm-13 12h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRemovedFilled16;
