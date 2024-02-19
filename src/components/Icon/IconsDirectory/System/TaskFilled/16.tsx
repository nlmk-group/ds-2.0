import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTaskFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 14a6 6 0 0 0 5.089-9.18l-5.935 5.94L4.61 8.216l.846-.846 1.698 1.698 5.198-5.198A6 6 0 1 0 8 14Z"
      />
    </svg>
  );
};

export default IconTaskFilled16;
