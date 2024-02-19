import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRightColumnArrowOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M26.889 4H30v25h-3.111V4Zm-9.333 10.937V10.25l6.222 6.25-6.222 6.25v-4.688H2v-3.125h15.556Z"
      />
    </svg>
  );
};

export default IconRightColumnArrowOutlined32;
