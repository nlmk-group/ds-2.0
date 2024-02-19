import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftUpFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.707 3.293a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 3 10h4v.444c0 1.643 0 2.937.085 3.978.087 1.063.267 1.95.678 2.756a7 7 0 0 0 3.06 3.059c.805.41 1.692.591 2.755.678 1.041.085 2.335.085 3.978.085H21a1 1 0 1 0 0-2h-3.4c-1.697 0-2.909 0-3.86-.078-.938-.077-1.533-.224-2.01-.467a5 5 0 0 1-2.185-2.185c-.243-.477-.39-1.072-.467-2.01C9.001 13.308 9 12.096 9 10.4V10h4a1 1 0 0 0 .707-1.707l-5-5Z"
      />
    </svg>
  );
};

export default IconCornerArrowLeftUpFilled24;
