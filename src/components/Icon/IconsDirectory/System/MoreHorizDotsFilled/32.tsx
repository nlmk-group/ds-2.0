import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoreHorizDotsFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.667 13.333A2.674 2.674 0 0 0 4 16c0 1.467 1.2 2.667 2.667 2.667 1.466 0 2.666-1.2 2.666-2.667 0-1.467-1.2-2.667-2.666-2.667Zm18.666 0A2.674 2.674 0 0 0 22.667 16c0 1.467 1.2 2.667 2.666 2.667C26.8 18.667 28 17.467 28 16c0-1.467-1.2-2.667-2.667-2.667Zm-12 2.667c0-1.467 1.2-2.667 2.667-2.667 1.467 0 2.667 1.2 2.667 2.667 0 1.467-1.2 2.667-2.667 2.667A2.675 2.675 0 0 1 13.333 16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMoreHorizDotsFilled32;
