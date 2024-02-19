import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBarChartFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.7 1.5H6.3v13h3.4v-13ZM5.071 5.1H1.5v9.4h3.571V5.1ZM14.5 8.357h-3.4V14.5h3.4V8.357Z"
      />
    </svg>
  );
};

export default IconBarChartFilled16;
