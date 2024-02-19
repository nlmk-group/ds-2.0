import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoreVertDotsFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4a2.674 2.674 0 0 0-2.667 2.667c0 1.466 1.2 2.666 2.667 2.666 1.467 0 2.667-1.2 2.667-2.666C18.667 5.2 17.467 4 16 4Zm0 18.667a2.674 2.674 0 0 0-2.667 2.666C13.333 26.8 14.533 28 16 28c1.467 0 2.667-1.2 2.667-2.667 0-1.466-1.2-2.666-2.667-2.666ZM13.333 16c0-1.467 1.2-2.667 2.667-2.667 1.467 0 2.667 1.2 2.667 2.667 0 1.467-1.2 2.667-2.667 2.667A2.674 2.674 0 0 1 13.333 16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMoreVertDotsFilled32;
