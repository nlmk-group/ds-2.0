import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUndoArrowFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.259 8c-2.59 0-4.934.99-6.742 2.6L2 7v9h8.793l-3.537-3.62c1.359-1.16 3.088-1.88 5.003-1.88 3.459 0 6.4 2.31 7.425 5.5L22 15.22C20.642 11.03 16.802 8 12.259 8Z"
      />
    </svg>
  );
};

export default IconUndoArrowFilled24;
