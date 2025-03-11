import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsNotSecured24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6V18H20V6H22V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6H4Z"
        fill={htmlColor || 'var(--steel-80)'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 6V13H13V6H11ZM11 14V16H13V14H11Z"
        fill={'var(--spectrum-red-40)'}
      />
    </svg>
  );
};

export default IconOrderIsNotSecured24;
