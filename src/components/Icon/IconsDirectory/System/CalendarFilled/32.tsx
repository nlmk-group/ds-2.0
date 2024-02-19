import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28.317 5.367h-5.4v-2.7h-2.7v2.7h-8.1v-2.7h-2.7v2.7h-5.4a1.35 1.35 0 0 0-1.35 1.35v21.6c0 .745.604 1.35 1.35 1.35h24.3a1.35 1.35 0 0 0 1.35-1.35v-21.6a1.35 1.35 0 0 0-1.35-1.35Zm-22.95 8.1h21.6v13.5h-21.6v-13.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendarFilled32;
