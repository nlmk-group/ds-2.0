import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarCheckFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.883 1.333v1.3h3.9v-1.3h1.3v1.3h2.6a.65.65 0 0 1 .65.65v10.4a.65.65 0 0 1-.65.65h-11.7a.65.65 0 0 1-.65-.65v-10.4a.65.65 0 0 1 .65-.65h2.6v-1.3h1.3Zm7.15 4.55h-10.4v7.15h10.4v-7.15ZM9.808 7.272 7.509 9.57 6.131 8.19l-.92.92 2.298 2.298 3.217-3.217-.919-.92Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendarCheckFilled16;
