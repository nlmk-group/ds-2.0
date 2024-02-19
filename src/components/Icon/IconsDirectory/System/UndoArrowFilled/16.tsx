import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUndoArrowFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.181 5.667c-1.812 0-3.454.66-4.719 1.733L1 5v6h6.155L4.68 8.587a5.524 5.524 0 0 1 3.5-1.254c2.421 0 4.48 1.54 5.198 3.667L15 10.48c-.95-2.793-3.639-4.813-6.819-4.813Z"
      />
    </svg>
  );
};

export default IconUndoArrowFilled16;
