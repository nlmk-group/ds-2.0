import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAllDoneDoubleCheckFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M23.512 10.27 21.22 8l-7.942 7.868 2.292 2.271 7.942-7.868Z" />
      <path
        fill={htmlColor || 'currentColor'}
        d="M30 10.27 27.694 8 15.57 20.013l-4.79-4.735-2.292 2.27 7.082 7.017L30 10.27ZM11.375 22.295 4.306 15.28 2 17.548l7.084 7.018 2.291-2.27Z"
      />
    </svg>
  );
};

export default IconAllDoneDoubleCheckFilled32;
