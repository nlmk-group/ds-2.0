import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRollFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.743 12a4.257 4.257 0 1 1 8.514 0 4.257 4.257 0 0 1-8.514 0Zm6.446 0a2.19 2.19 0 1 1-4.378 0 2.19 2.19 0 0 1 4.378 0Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 3.77a5.23 5.23 0 1 0 0 10.46 5.23 5.23 0 0 0 0-10.46Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRollFilled24;
