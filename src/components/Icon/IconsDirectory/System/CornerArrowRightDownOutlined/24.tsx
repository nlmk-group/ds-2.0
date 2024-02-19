import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowRightDownOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.26 5.078C9.308 5.001 8.096 5 6.4 5H3a1 1 0 1 1 0-2h3.444c1.643 0 2.937 0 3.978.085 1.063.087 1.95.267 2.756.678a7 7 0 0 1 3.059 3.06c.41.805.591 1.692.678 2.755.085 1.041.085 2.335.085 3.978v4.03l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L15 17.586V13.6c0-1.697 0-2.909-.078-3.86-.077-.938-.224-1.533-.467-2.01a5 5 0 0 0-2.185-2.185c-.477-.243-1.072-.39-2.01-.467Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowRightDownOutlined24;
