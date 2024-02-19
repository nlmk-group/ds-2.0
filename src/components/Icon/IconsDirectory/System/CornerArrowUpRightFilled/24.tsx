import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowUpRightFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.707 3.293A1 1 0 0 0 14 4v4h-.444c-1.643 0-2.937 0-3.978.085-1.063.087-1.95.267-2.756.678a7 7 0 0 0-3.059 3.06c-.41.805-.591 1.692-.678 2.755C3 15.619 3 16.913 3 18.556V20a1 1 0 1 0 2 0v-1.4c0-1.697 0-2.909.078-3.86.077-.938.224-1.533.467-2.01a5 5 0 0 1 2.185-2.185c.477-.243 1.072-.39 2.01-.466C10.692 10 11.904 10 13.6 10h.4v4a1 1 0 0 0 1.707.707l5-5a1 1 0 0 0 0-1.414l-5-5Z"
      />
    </svg>
  );
};

export default IconCornerArrowUpRightFilled24;
