import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowDownFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M18.35 4.5h-3.7v15.292l-6.741-6.554-2.626 2.553L16.5 26.697l11.217-10.906-2.626-2.553-6.741 6.554V4.5Z"
      />
    </svg>
  );
};

export default IconArrowDownFilled32;
