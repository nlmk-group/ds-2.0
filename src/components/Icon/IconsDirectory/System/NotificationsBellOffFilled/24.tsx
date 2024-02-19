import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotificationsBellOffFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.385 21c1.015 0 1.846-.83 1.846-1.846H9.538c0 1.015.822 1.846 1.847 1.846Zm5.538-10.154c0-2.834-1.514-5.206-4.154-5.834V3H10v2.012c-.222.056-.434.139-.637.213l7.56 7.56v-1.939ZM5.302 3.785 4 5.086 6.594 7.68c-.48.923-.748 1.994-.748 3.166v4.615L4 17.308v.923h13.145l1.606 1.606 1.301-1.302-14.75-14.75Z"
      />
    </svg>
  );
};

export default IconNotificationsBellOffFilled24;
