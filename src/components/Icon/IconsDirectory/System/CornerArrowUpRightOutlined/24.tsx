import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowUpRightOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L17.586 10H13.6c-1.697 0-2.909 0-3.86.078-.938.077-1.533.224-2.01.467a5 5 0 0 0-2.185 2.185c-.243.477-.39 1.072-.467 2.01C5.001 15.692 5 16.904 5 18.6V20a1 1 0 1 1-2 0v-1.444c0-1.643 0-2.937.085-3.978.087-1.063.267-1.95.678-2.756a7 7 0 0 1 3.06-3.059c.805-.41 1.692-.591 2.755-.678C10.619 8 11.913 8 13.556 8h4.03l-3.293-3.293a1 1 0 0 1 0-1.414Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowUpRightOutlined24;
