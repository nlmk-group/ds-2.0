import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAllDoneDoubleCheckOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22.534 5 11.613 16.045l-4.315-4.353-1.455 1.472L11.613 19 24 6.472 22.534 5Zm-4.377 1.472L16.702 5l-6.545 6.619 1.456 1.472 6.544-6.619ZM5.77 19 0 13.164l1.466-1.472 5.76 5.836L5.77 19Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAllDoneDoubleCheckOutlined24;
