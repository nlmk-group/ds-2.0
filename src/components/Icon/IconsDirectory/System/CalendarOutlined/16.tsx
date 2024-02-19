import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.08 2.63h2.6a.65.65 0 0 1 .65.65v10.4a.65.65 0 0 1-.65.65H1.98a.65.65 0 0 1-.65-.65V3.28a.65.65 0 0 1 .65-.65h2.6v-1.3h1.3v1.3h3.9v-1.3h1.3v1.3Zm-1.3 1.3h-3.9v1.3h-1.3v-1.3H2.63v2.6h10.4v-2.6h-1.95v1.3h-1.3v-1.3Zm3.25 3.9H2.63v5.2h10.4v-5.2Z"
      />
    </svg>
  );
};

export default IconCalendarOutlined16;
