import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftDownOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.556 3H21a1 1 0 1 1 0 2h-3.4c-1.697 0-2.909 0-3.86.078-.938.077-1.533.224-2.01.467A5 5 0 0 0 9.545 7.73c-.243.477-.39 1.072-.467 2.01C9.001 10.692 9 11.904 9 13.6v3.986l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 17.586v-4.03c0-1.643 0-2.937.085-3.978.087-1.063.267-1.95.678-2.756a7 7 0 0 1 3.06-3.059c.805-.41 1.692-.591 2.755-.678C14.619 3 15.913 3 17.556 3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowLeftDownOutlined24;
