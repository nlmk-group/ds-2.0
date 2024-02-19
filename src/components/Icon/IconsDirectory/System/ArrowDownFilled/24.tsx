import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowDownFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.528 3.5h-3.057v11.489L5.454 10.11l-2.171 2.111L12 20.697l8.717-8.475-2.171-2.111-5.018 4.877V3.5Z"
      />
    </svg>
  );
};

export default IconArrowDownFilled24;
